"use client";

import Image from "next/image";
import BackButton from "../../components/BackButton";
import { useQuery } from "@tanstack/react-query";
import { User } from "@/app/model/User";
import { getUser } from "../lib/getUser";
type Props = {
  username: string;
};

export default function UserInfo({ username }: Props) {
  const { data: user, error } = useQuery<
    User,
    Object,
    User,
    [_1: string, _2: string]
  >({
    queryKey: ["users", username],
    queryFn: getUser,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    gcTime: 300 * 1000,
  });
  console.log(error, "error");
  if (error) {
    return (
      <>
        <div className="flex flex-row items-center ">
          <BackButton />
          <h2 className="text-xl ml-2">프로필</h2>
        </div>
        <div className="flex flex-row items-center  mt-5">
          <div className="mr-5 relative w-[100px] h-[100px] rounded-[100px] overflow-hidden ">
            <Image src={""} alt="" fill className="object-cover" />
          </div>
          <div className="flex-1 flex justify-between items-center flex-col">
            <div>
              <h2>@{username}</h2>
            </div>

            <div className="mt-10 text-2xl font-semibold">
              계정이 존재하지 않습니다.
            </div>
          </div>
        </div>
      </>
    );
  }

  if (!user) {
    return null;
  }
  return (
    <>
      <div className="flex flex-row items-center ">
        <BackButton />
        <h2 className="text-xl ml-2">{user?.nickname}</h2>
      </div>
      <div className="flex flex-row items-center  mt-5">
        <div className="mr-5 relative w-[100px] h-[100px] rounded-[100px] overflow-hidden ">
          <Image src={""} alt="" fill className="object-cover" />
        </div>
        <div className="flex-1 flex justify-between items-center">
          <div>
            <h2>{user?.nickname}</h2>
            <span>{user?.id}</span>
          </div>
          <button className="p-2 px-4 text-sm bg-black text-white rounded-full">
            팔로우
          </button>
        </div>
      </div>
    </>
  );
}
