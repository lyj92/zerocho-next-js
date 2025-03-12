import Tab from "./components/Tab";
import TabProvider from "./components/tabProvider";
import PostForm from "./components/PostForm";
import Post from "../components/Post";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

async function getPostRecommends() {
  const res = await fetch(
    `${process?.env?.NEXT_PUBLIC_BASE_URL}/api/postRecommends`,
    {
      next: {
        tags: ["posts", "recommends"],
        revalidate: 60,
      },
      // cache: "no-store", // next.js 15버젼에서는 기본값 (없어도 됨) no-store 일때 revalidate 설정은 불가 => 말이 안되는 모순되는 상황 캐시를 하지 말라는데 캐시 값을 1분마다 지워라는 성립되지않음
      // cache: "force-cache", // 캐싱을 하고 싶다면 선언해야함
    }
  );
  console.log(res, "res");

  if (!res?.ok) {
    throw new Error("Failed to fetch data");
  }

  return res?.json();
}

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient?.prefetchQuery({
    queryKey: ["posts", "recommends"],
    queryFn: getPostRecommends,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <div className="overflow-hidden">
      <HydrationBoundary state={dehydratedState}>
        <TabProvider>
          <Tab />
          <PostForm />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </TabProvider>
      </HydrationBoundary>
    </div>
  );
}
