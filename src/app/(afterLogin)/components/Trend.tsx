import { Hashtag } from "@/app/model/Hashtag";
import Link from "next/link";

type Prop = { trend: Hashtag };
export default function Trend({ trend }: Prop) {
  return (
    <Link
      href={`/search?q=${encodeURIComponent(trend?.title)}`}
      className="w-full flex flex-col my-4 duration-200 hover:bg-gray-100 py-2  cursor-pointer"
    >
      <span className="text-xs text-gray-400">실시간 트렌드</span>
      <h2 className="text-base text-black my-1">{trend?.title}</h2>
      <span className="text-gray-400 text-xs">
        {trend?.count?.toLocaleString()} posts
      </span>
    </Link>
  );
}
