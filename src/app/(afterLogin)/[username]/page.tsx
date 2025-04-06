import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getUser } from "./lib/getUser";
import UserPosts from "./components/UserPosts";
import UserInfo from "./components/UserInfo";
import { getUserPosts } from "./lib/getUserPosts";
type Props = {
  params: Promise<{ username: string }>;
};

export default async function Profile(props: Props) {
  const { username } = await props.params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["users", username],
    queryFn: getUser,
  });
  await queryClient.prefetchQuery({
    queryKey: ["posts", "users", "recommends"],
    queryFn: getUserPosts,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <div>
      <HydrationBoundary state={dehydratedState}>
        <UserInfo username={username} />
        <UserPosts username={username} />
      </HydrationBoundary>
    </div>
  );
}
