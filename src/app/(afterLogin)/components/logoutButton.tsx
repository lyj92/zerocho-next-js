"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function LogOutButton() {
  const router = useRouter();
  const { data: me } = useSession();

  const onLogOut = () => {
    signOut({ redirect: false }).then(() => {
      router.replace("/");
    });
  };

  console.log(me, "?me?");

  if (!me?.user) {
    return null;
  }

  return (
    <button
      className="absolute bottom-2 left-0 cursor-pointer flex flex-row items-center p-2 bg-white w-full rounded-[50px] bg-gray-200"
      onClick={onLogOut}
    >
      <div className="w-[40px] h-[40px] relative rounded-full overflow-hidden mr-2">
        <Image
          src={
            me?.user?.image
              ? `${process.env.NEXT_PUBLIC_BASE_URL}/${me?.user?.image}`
              : ""
          }
          alt={me?.user?.name ? me?.user?.name : ""}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-start items-start">
        <div>{me?.user?.name}</div>
        <div>{me?.user?.id}</div>
      </div>
    </button>
  );
}
