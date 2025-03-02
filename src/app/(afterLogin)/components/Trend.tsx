import Link from "next/link";

export default function Trend() {
  return (
    <Link
      href={"/search?q=트렌드"}
      className="w-full flex flex-col my-4 duration-200 hover:bg-gray-100 py-2  cursor-pointer"
    >
      <span className="text-xs text-gray-400">실시간 트렌드</span>
      <h2 className="text-base text-black my-1">제로초</h2>
      <span className="text-gray-400 text-xs">1.275 posts</span>
    </Link>
  );
}
