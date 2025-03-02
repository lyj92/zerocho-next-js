"use client";

import { usePathname } from "next/navigation";
import Trend from "./Trend";

export default function TrendSection() {
  const trends = Array.from({ length: 10 }, (_, i) => <Trend key={i} />);
  const pathname = usePathname();
  if (pathname === "/explore") {
    return null;
  }
  return (
    <div className="rounded-[20px] bg-gray-50 p-2 mb-5 mt-14">
      <h2 className="text-xl">나를 위한 트렌드</h2>
      {trends}
    </div>
  );
}
