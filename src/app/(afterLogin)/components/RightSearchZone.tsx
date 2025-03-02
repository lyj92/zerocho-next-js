"use client";

import React from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import SearchForm from "./SearchForm";
export default function RightSearchZone() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const onChangeFollow = () => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("pf", "on");
    router.replace(`/search?${newSearchParams.toString()}`);
  };
  const onChangeAll = () => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete("pf");
    router.replace(`/search?${newSearchParams.toString()}`);
  };
  if (pathname === "/explore") {
    return null;
  }
  if (pathname === "/search") {
    return (
      <div className="flex flex-col mt-2">
        <h2>검색필터</h2>
        <div className="mt-4">
          <div className=" flex flex-col border border-gray-200 p-2 rounded-[10px] ">
            <label className="text-sm mb-2">사용자</label>
            <div className="flex flex-row justify-between items-center">
              <div className="text-sm text-gray-600">모든 사용자</div>
              <input
                type="radio"
                name="pf"
                className="w-[10px] h-[10px] cursor-pointer"
                defaultChecked
                onChange={onChangeAll}
              />
            </div>
            <div className="flex flex-row justify-between items-center mt-2">
              <div className="text-sm text-gray-600">내가 팔로우하는 사람들</div>
              <input
                type="radio"
                name="pf"
                value="on"
                className="w-[10px] h-[10px] cursor-pointer"
                onChange={onChangeFollow}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div style={{ marginBottom: 60, width: "inherit" }}>
      <SearchForm />
    </div>
  );
}
