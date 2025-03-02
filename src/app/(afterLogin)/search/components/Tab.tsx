"use client";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useState } from "react";
export default function Tab() {
  const [current, setCurrent] = useState("hot");
  const router = useRouter();
  const searchParams = useSearchParams();
  const onClickHot = () => {
    setCurrent("hot");
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete("f");
    router.replace(`/search?q=${searchParams.get("q")}`);
    // router.replace(`/search?${newSearchParams.toString()}`);
  };
  const onClickNew = () => {
    setCurrent("new");
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("f", "live");
    router.replace(`/search?${newSearchParams.toString()}`); // 있는거 그대로 쓰되 하나 더 추가한다 toString()
  };

  return (
    <div className="py-2 w-full flex flex-row justify-between items-center">
      <div
        className={`  flex-1 text-center cursor-pointer ${current === "hot" ? "text-blue-500" : ""}`}
        onClick={onClickHot}
      >
        인기
      </div>
      <div
        className={` flex-1 text-center cursor-pointer ${current === "new" ? "text-blue-500" : ""}`}
        onClick={onClickNew}
      >
        최신
      </div>
    </div>
  );
}
