"use client";
import Image from "next/image";
export default function LogOutButton() {
  const me = {
    id: "zerocho0",
    image: "/profile.jpg",
    nickname: "제로초",
  };

  const onLogOut = () => {};

  return (
    <button
      className="absolute bottom-2 left-0 cursor-pointer flex flex-row items-center p-2 bg-white w-full rounded-[50px] bg-gray-200"
      onClick={onLogOut}
    >
      <div className="w-[40px] h-[40px] relative rounded-full overflow-hidden mr-2">
        <Image
          src={me.image}
          alt={me?.nickname}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-start items-start">
        <div>{me.nickname}</div>
        <div>{me.id}</div>
      </div>
    </button>
  );
}
