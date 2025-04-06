"use client";

import { usePathname } from "next/navigation";
import { useContext } from "react";
import { TabContext } from "./tabProvider";

export default function Tab() {
  const { tab, setTab } = useContext(TabContext);
  const pathname = usePathname();
  const isRootPath = pathname === "/" || pathname === "/home";

  if (!isRootPath) {
    return null;
  }
  return (
    <div className="w-[680px] flex flex-col fixed bg-white/50 backdrop-blur-xl z-10 px-5">
      <h2 className="text-xl font-semibold mb-10">홈</h2>

      <div className="flex flex-row border-b ">
        <div
          className="cursor-pointer flex-1  justify-center items-center text-center"
          onClick={() => {
            setTab("rec");
          }}
        >
          <div className="inline-block">
            추천
            {tab === "rec" && (
              <div className="bg-blue-400 h-[3px] mt-2 rounded-sm"></div>
            )}
          </div>
        </div>
        <div
          className="cursor-pointer flex-1 justify-center items-center text-center"
          onClick={() => {
            setTab("fol");
          }}
        >
          <div className="inline-block ">
            팔로우 중
            {tab === "fol" && (
              <div className="bg-blue-400 h-[3px] mt-2 rounded-sm"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
