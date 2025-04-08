"use client"; // 클라이언트 사이드 렌더링을 위한 Next.js 지시어 (서버 컴포넌트가 아닌 클라이언트 컴포넌트로 선언)

// 필요한 라이브러리와 컴포넌트 임포트
import {
  useInfiniteQuery,
  InfiniteData,
  useSuspenseInfiniteQuery,
} from "@tanstack/react-query"; // 무한 스크롤 데이터 fetch를 위한 훅과 타입
import React, { Fragment, useEffect } from "react"; // React와 Fragment 컴포넌트 (의미 없는 래퍼 역할)
import { getPostRecommends } from "../lib/getPostRecommends"; // 추천 게시물을 가져오는 API 함수
import Post from "../../components/Post"; // 개별 포스트를 렌더링하는 컴포넌트
import { Post as IPost } from "@/app/model/Post"; // Post 타입 정의 (인터페이스)
import { useInView } from "react-intersection-observer";
import Loading from "../loading";
export default function PostRecommends() {
  // useInfiniteQuery 훅 사용하여 무한 스크롤 데이터 가져오기  // isLoading = isPending && isFetching
  const { data, fetchNextPage, hasNextPage, isFetching, isPending, isError } =
    useSuspenseInfiniteQuery<
      // isFetching 리액트 쿼리가 데이터를 가져오는 순간
      IPost[], // TData: API 호출 시 반환되는 데이터 타입 (한 페이지당 Post 배열)
      Object, // TError: 에러 타입 (기본 Object로 설정)
      InfiniteData<IPost[]>, // TQueryData: 쿼리 스토어에 저장될 데이터 타입 (여러 페이지의 데이터를 포함하는 구조)
      [string, string], // TQueryKey: 쿼리 키의 타입 (["posts", "recommends"]와 같은 배열 형태)
      number // TPageParam: 페이지 파라미터 타입 (다음 페이지를 가져올 때 사용하는 값의 타입)
    >({
      queryKey: ["posts", "recommends"], // 캐시에서 이 쿼리를 식별하는 고유 키
      queryFn: getPostRecommends, // 실제 데이터를 가져오는 함수
      initialPageParam: 0, // 첫 페이지 요청 시 사용할 파라미터 (처음 시작 값)[[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]]
      getNextPageParam: (lastPage) => lastPage.at(-1)?.postId, // 다음 페이지 파라미터를 결정하는 함수 (마지막 포스트의 ID)
      staleTime: 60 * 1000, // 데이터가 "신선(fresh)"한 상태로 유지되는 시간 (밀리초) - 이 시간 동안은 재요청 없이 캐시 사용
      gcTime: 300 * 1000, // 사용되지 않는 쿼리가 캐시에서 삭제되기 전까지 유지되는 시간 (밀리초) - Garbage Collection Time
    });

  const { ref, inView } = useInView({ threshold: 0, delay: 0 });

  // isFetching 리액트 쿼리가 데이터를 가져오는 순간을 말하며 !isFetching 상태를 추가하여 중복적으로 데이터 가져오는것을 방지!
  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage(); // hasNextPage 다음페이지 존재 유무, 있으면 fetchNextPage 다음페이지 불러오는 동작
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  // 로딩중
  if (isPending) {
    return <Loading />;
  }
  // 에러상태
  if (isError) {
    return "에러 처리해줘";
  }

  // 데이터 렌더링
  // data?.pages: 각 페이지 배열 (2차원 배열 형태 - [[page1 posts], [page2 posts], ...])
  return data?.pages.map((page: IPost[], i) => (
    // 각 페이지마다 Fragment로 감싸서 불필요한 DOM 요소 방지
    <>
      <Fragment key={i}>
        {/* 페이지 내의 각 포스트를 Post 컴포넌트로 렌더링 */}
        {page.map((post) => (
          <Post key={post.postId} post={post} />
        ))}
      </Fragment>
      <div ref={ref} style={{ height: "50px" }} />
    </>
  ));
}
