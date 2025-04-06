import BackButton from "@/app/(afterLogin)/components/BackButton";
import Post from "@/app/(afterLogin)/components/Post";
import CommentForm from "./components/CommentForm";
import SinglePost from "./components/SinglePost";
import {
  dehydrate,
  QueryClient,
  HydrationBoundary,
} from "@tanstack/react-query";
import { getSinglePost } from "./lib/getSinglePost";
import { getComments } from "./lib/getComments";
import Comments from "./components/Comments";
import ImageZone from "@/app/(afterLogin)/@modal/[username]/status/[id]/photo/[photoId]/components/ImageZone";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Page(props: Props) {
  const { id } = await props?.params;
  const queryClient = new QueryClient();
  await queryClient?.prefetchQuery({
    queryKey: ["posts", id],
    queryFn: getSinglePost,
  });
  await queryClient?.prefetchQuery({
    queryKey: ["posts", id, "comments"],
    queryFn: getComments,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <div>
      <HydrationBoundary state={dehydratedState}>
        <div className="flex flex-row items-center my-2">
          <BackButton />
          <h2 className="text-xl font-semibold ml-2">게시하기</h2>
        </div>
        <ImageZone id={id} />
        <div className="my-10">
          <SinglePost id={id} />
          <CommentForm id={""} />
          <div>
            <Comments id={id} />
          </div>
        </div>
      </HydrationBoundary>
    </div>
  );
}
