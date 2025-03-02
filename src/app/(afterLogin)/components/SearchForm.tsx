import React from "react";

type Props = {
  q?: string;
};

export default function SearchForm({ q }: Props) {
  return (
    <form
      action=""
      className="flex flex-row items-center h-[42px] w-[340px] rounded-[21px] bg-slate-200 mt-[6px] mb-[12px] px-5 "
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[22px]">
        <circle cx="10" cy="10" r="7" fill="none" stroke="black" strokeWidth="2" />
        <line x1="15.5" y1="15.5" x2="21" y2="21" stroke="black" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <input type="search" className="bg-transparent border-none focus:outline-none" defaultValue={q} />
    </form>
  );
}
