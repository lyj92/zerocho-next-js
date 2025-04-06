"use client";

import { usePathname } from "next/navigation";
import Trend from "./Trend";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { getTrends } from "../lib/getTrends";
import { Hashtag } from "@/app/model/Hashtag";

export default function TrendSection() {
  const { data: session } = useSession();
  const { data } = useQuery<Hashtag[]>({
    queryKey: ["trends"],
    queryFn: getTrends,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    gcTime: 300 * 1000,
    enabled: !!session?.user, // 로그인을 했을 때에만 조회
  });

  const pathname = usePathname();

  // 현재 경로가 /explore인 경우 렌더링하지 않음
  if (pathname === "/explore") {
    return null;
  }

  if (session?.user) {
    return (
      <div className="rounded-[20px] bg-gray-50 p-2 mb-5 mt-14">
        <h2 className="text-xl">나를 위한 트렌드</h2>
        {data?.map((trend) => (
          <Trend trend={trend} key={trend.tagId} />
        ))}
      </div>
    );
  }
}
