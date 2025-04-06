"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Form from "next/form";

type Props = {
  q?: string;
  pf?: string;
  f?: string;
};

export default function SearchForm({ q, pf, f }: Props) {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const searchQuery = formData.get("q") as string;

    // 검색어가 있을 때만 페이지 이동
    if (searchQuery?.trim()) {
      const pfValue = (formData.get("pf") as string) || "";
      const fValue = (formData.get("f") as string) || "";

      let searchParams = new URLSearchParams();
      searchParams.append("q", searchQuery);
      if (pfValue) searchParams.append("pf", pfValue);
      if (fValue) searchParams.append("f", fValue);

      router.push(`/search?${searchParams.toString()}`);
    }
  };

  return (
    <Form
      action="/search"
      onSubmit={handleSubmit}
      className="flex flex-row items-center h-[42px] w-[340px] rounded-[21px] bg-slate-200 mt-[6px] mb-[12px] px-5"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-[22px]"
      >
        <circle
          cx="10"
          cy="10"
          r="7"
          fill="none"
          stroke="black"
          strokeWidth="2"
        />
        <line
          x1="15.5"
          y1="15.5"
          x2="21"
          y2="21"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <input
        type="search"
        name="q"
        className="bg-transparent border-none focus:outline-none w-full px-2"
        defaultValue={q}
        placeholder="검색어를 입력하세요"
      />
      <input type="hidden" name="pf" defaultValue={pf} />
      <input type="hidden" name="f" defaultValue={f} />
    </Form>
  );
}
