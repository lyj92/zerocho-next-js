import Image from "next/image";
import Link from "next/link";
import { img } from "../../../public";
import NavMenu from "./components/navMenu";
import LogOutButton from "./components/logoutButton";
import TrendSection from "./components/TrendSection";
import FollowRecommend from "./components/FollowRecommend";
import RightSearchZone from "./components/RightSearchZone";
import SearchForm from "./components/SearchForm";
import { auth } from "@/auth";
import RQProvider from "./components/RQProvider";
import FollowRecommendSection from "./components/FollowRecommentdSection";
type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

export default async function AfterLoginLayout({ children, modal }: Props) {
  const session = await auth();
  return (
    <div className="flex justify-center items-stretch">
      <header className="flex flex-end flex-col flex-grow-1 h-[100vh]">
        {" "}
        <section className=" w-[275px] h-[100vh] relative">
          <div className="fixed w-[275px]  h-[100vh] ">
            <Link href={"/home"} className="inline-block">
              <div className="w-[50px] h-[50px] rounded-full hover:bg-gray-200 flex items-center justify-center duration-200">
                <Image
                  src={img?.logo}
                  alt="z.com 로고"
                  width={40}
                  height={40}
                />
              </div>
            </Link>

            {session?.user && (
              <>
                <nav>
                  <ul>
                    <NavMenu />
                  </ul>
                  <Link
                    href={"/compose/tweet"}
                    className="justify-center items-center text-center border h-[50px]  inline-block w-full flex rounded-full bg-blue-200 hover:bg-blue-400 hover:text-white hover:border-blue-200 "
                  >
                    게시하기
                  </Link>
                </nav>

                <LogOutButton />
              </>
            )}
          </div>
        </section>
      </header>
      <RQProvider>
        <div className="flex items-start [h-100vh] flex-col flex-grow-1">
          <div className=" flex  h-[100vh] w-[1050px] justify-between">
            <main className="w-[680px]  h-[200dvh]">{children}</main>
            <section className=" w-[340px] h-[100vh]">
              <RightSearchZone />
              <TrendSection />
              <div className="bg-gray-50 p-2 rounded-[20px] mt-14">
                <h2 className="text-xl font-semibold">팔로우 추천</h2>
                <FollowRecommendSection />
              </div>
            </section>
          </div>
        </div>
        {modal}
      </RQProvider>
    </div>
  );
}
