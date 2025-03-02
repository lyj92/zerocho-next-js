import Post from "@/app/(afterLogin)/components/Post";
import PhotoModalCloseButton from "./components/PhotoModalCloseButton";
import CommentForm from "@/app/(afterLogin)/[username]/status/[id]/components/CommentForm";
import { img, thumbnail } from "../../../../../../../../../public";
import Image from "next/image";
export default function PageModal() {
  return (
    <div className="fixed left-0 top-0 w-full h-full">
      <div className="fixed left-0 top-0 w-full h-full bg-black  z-[100]" />
      <div className="w-full h-full flex flex-row items-start justify-between fixed left-0 top-0 z-[110]">
        <div className="fixed left-1 top-1 z-50">
          <PhotoModalCloseButton />
        </div>

        <div className="w-[70%] h-full flex justify-center items-center">
          <div className="w-[80%] h-[80%] relative">
            <Image src={img.image} alt="" fill className="object-cover" />
          </div>
        </div>

        <div className="w-[28%] bg-white overflow-auto">
          <div className="flex flex-row items-center my-2">
            <h2 className="text-xl font-semibold ml-2">게시하기</h2>
          </div>
          <div className="my-10 h-[89vh] overflow-auto w-full">
            <Post />

            <CommentForm id={""} />
            <Post />
            <Post />
          </div>
        </div>
      </div>
    </div>
  );
}
