"use client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { img } from "../../../../../../public";
export default function TweetModal() {
  const [content, setContent] = useState("");
  const imageRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  // const { data: me } = useSession();
  const router = useRouter();

  const onSubmit = () => {};
  const onClickClose = () => {
    router.back();
  };

  const me = {
    id: "zerocho0",
    image: "/5Udwvqim.jpg",
  };

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    // textarea 높이 자동 조절
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }
  };

  const onClickButton = () => {
    imageRef.current?.click();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-20 z-30 ">
      <div className="fixed left-0 right-0 m-auto top-[100px] shadow shadow-lg bg-white flex w-[500px] py-10 px-5 flex-col z-40 rounded-md">
        <div className="absolute left-2 top-2" onClick={onClickClose}>
          <svg
            width={24}
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03 cursor-pointer"
          >
            <g>
              <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
            </g>
          </svg>
        </div>
        <div className="flex flex-row  justify-between">
          <div className="w-[30px] h-[30px] relative rounded-[30px] overflow-hidden mr-1">
            <Image src={img?.image} fill className="object-cover" alt="" />
          </div>
          <textarea
            ref={textareaRef}
            onChange={onChangeContent}
            rows={1}
            className={"flex-1 flex focus:outline-none resize-none overflow-auto max-h-[500px]"}
            placeholder="무슨 일이 일어나고 있나요?"
            value={content}
          />
        </div>

        <div className="flex flex-row items-center justify-between  mt-10">
          <button
            className="flex justify-center items-center p-1 duration-200 rounded-[24px] cursor-pointer hover:bg-gray-200"
            onClick={onClickButton}
          >
            <svg width={24} viewBox="0 0 24 24" aria-hidden="true">
              <g>
                <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path>
              </g>
            </svg>
            <input type="file" name="imageFiles" multiple hidden ref={imageRef} />
          </button>
          <button
            className="duration-200 hover:text-white bg-blue-300 p-2 text-black rounded-[20px]"
            onClick={onSubmit}
          >
            게시하기
          </button>
        </div>
      </div>
    </div>
  );
}
