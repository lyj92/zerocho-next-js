"use client";

import ActionButton from "@/app/(afterLogin)/components/ActionButton";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Post as IPost } from "@/app/model/Post";
import { getSinglePost } from "@/app/(afterLogin)/[username]/status/[id]/lib/getSinglePost";

type Props = {
  id: string;
};
export default function ImageZone({ id }: Props) {
  const { data: post, error } = useQuery<
    IPost,
    Object,
    IPost,
    [_1: string, _2: string]
  >({
    queryKey: ["posts", id],
    queryFn: getSinglePost,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    gcTime: 300 * 1000,
  });

  if (!post?.Images[0]) {
    return null;
  }

  return (
    <div>
      <img src={post.Images[0].link} alt={post.content} />
      <div style={{ backgroundImage: `url(${post.Images[0].link})` }} />
      <div>
        <div>
          <ActionButton />
        </div>
      </div>
    </div>
  );
}
