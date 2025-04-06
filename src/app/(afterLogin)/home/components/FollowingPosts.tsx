"use client";

import { useQuery } from "@tanstack/react-query";
import { getFollowingPosts } from "../lib/getFollowingPosts";
import Post from "../../components/Post";
import { Post as IPost } from "@/app/model/Post";

export default function FollowingPosts() {
  const { data } = useQuery<IPost[]>({
    queryKey: ["posts", "followings"],
    queryFn: getFollowingPosts,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    gcTime: 300 * 1000,
  });

  return data?.map((post) => <Post key={post.postId} post={post} />);
}
