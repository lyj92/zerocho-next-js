import Image from "next/image";
import styles from "@/app/(beforeLogin)/components/main.module.css";
import { img } from "../../../../public";
import Link from "next/link";
export default function Main() {
  return (
    <div className="flex flex-row bg-white w-[100dvw] h-[100dvh]">
      <div className="flex-1 flex items-center justify-center">
        <Image src={img?.logo} alt="logo" width={500} height={500} />
      </div>
      <div className="flex-1 flex items-start justify-center flex-col">
        <h1 className="font-semibold text-[52px] ">지금 일어나고 있는 일</h1>
        <h2 className="font-semibold text-[32px] mt-10 mb-5">
          지금 가입하세요.{" "}
        </h2>
        <Link
          href="/i/flow/signup"
          className="flex items-center justify-center  mb-10 rounded-[50px] bg-blue-500 text-white w-[300px] h-[40px]  "
        >
          계정 만들기
        </Link>
        <h3 className="font-semibold text-[20px] mb-5">
          이미 트위터에 가입하셨나요?
        </h3>
        <Link
          href="/login"
          className="flex items-center justify-center w-[300px] border border-black rounded-[50px] h-[40px] transition duration-200 text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500"
        >
          로그인
        </Link>
      </div>
    </div>
  );
}
