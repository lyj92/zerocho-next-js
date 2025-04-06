import Tab from "./components/Tab";
import TabProvider from "./components/tabProvider";
import PostForm from "./components/PostForm";
import Post from "../components/Post";
import { getPostRecommends } from "./lib/getPostRecommends";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import PostRecommends from "./components/PostRecommends";
import TabDecider from "./components/TabDecider";

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["posts", "recommends"],
    queryFn: getPostRecommends,
    initialPageParam: 0,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <div className="overflow-hidden">
      <HydrationBoundary state={dehydratedState}>
        <TabProvider>
          <Tab />
          <PostForm />
          <TabDecider />
        </TabProvider>
      </HydrationBoundary>
    </div>
  );
}
