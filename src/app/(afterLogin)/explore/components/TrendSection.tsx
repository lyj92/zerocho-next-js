"use client";

import Trend from "../../components/Trend";
import { useQuery } from "@tanstack/react-query";
import { Hashtag } from "@/app/model/Hashtag";
import { getTrends } from "../../lib/getTrends";

export default function TrendSection() {
  const { data } = useQuery<Hashtag[]>({
    queryKey: ["trends"],
    queryFn: getTrends,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    gcTime: 300 * 1000,
  });
  return data?.map((trend) => <Trend trend={trend} key={trend.tagId} />);
}
