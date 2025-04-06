"use client";
import {
  useQuery,
  useInfiniteQuery,
  InfiniteData,
} from "@tanstack/react-query";
import React, { Fragment } from "react";
import { getPostRecommends } from "../lib/getPostRecommends";
import Post from "../../components/Post";
import { Post as IPost } from "@/app/model/Post";
export default function PostRecommends() {
  const { data } = useInfiniteQuery<
    IPost[],
    Object,
    InfiniteData<IPost[]>,
    [_1: string, _2: string],
    number
  >({
    queryKey: ["posts", "recommends"],
    queryFn: getPostRecommends,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.at(-1)?.postId,
    staleTime: 60 * 1000, // fresh -> stale 밀리초 단위 개념 => 캐시에서 지정된 시간 까지 데이터를 가져오는 개념
    gcTime: 300 * 1000, // (기본 값 5분) 동안 캐시를 가지고 있다가 다시 리프레시 되는 개념 , staleTime < gcTime 보다 항상 짧아야 됨
  });
  return data?.pages.map((page, i) => (
    <Fragment key={i}>
      {page.map((post) => (
        <Post key={post.postId} post={post} />
      ))}
    </Fragment>
  ));
}
