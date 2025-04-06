import { QueryFunction } from "@tanstack/query-core";
import { Post } from "@/app/model/Post";

export const getUserPosts: QueryFunction<
  Post[],
  [_1: string, _2: string, string] // 쿼리 키 이며 실제로 username 만 사용 요청 부분에 _1, _2 설정으로 되어있음
> = async ({ queryKey }) => {
  const [_1, _2, username] = queryKey;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${username}/posts?cursor=0`,
    {
      next: {
        tags: ["posts", "users", username],
      },
      credentials: "include", // 쿠키 포함하여 인증정보를 요청에 포함
      cache: "no-store", // 매번 새로운 데이터를 가져오도록 캐시를 사용하지 않음
    }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
