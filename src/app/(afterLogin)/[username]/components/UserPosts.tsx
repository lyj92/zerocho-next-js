"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserPosts } from "../lib/getUserPosts";
import Post from "@/app/(afterLogin)/components/Post";
import { Post as IPost } from "@/app/model/Post";

type Props = {
  username: string;
};
export default function UserPosts({ username }: Props) {
  const { data } = useQuery<
    IPost[],
    Object,
    IPost[],
    [_1: string, _2: string, _3: string]
  >({
    queryKey: ["posts", "users", username],
    queryFn: getUserPosts,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    gcTime: 300 * 1000,
  });
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData(["users", username]);
  console.log("user", user);
  if (user) {
    // 계정이 존재할 때만 post 컴포넌트 활성화 시킴
    return data?.map((post: IPost) => <Post key={post.postId} post={post} />);
  }
  return null;
}
