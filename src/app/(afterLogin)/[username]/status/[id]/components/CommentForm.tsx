"use client";

import Image from "next/image";
import React, { ChangeEventHandler, FormEventHandler, useRef, useState } from "react";

type Props = {
  id: string;
};

export default function CommentForm({ id }: Props) {
  const [content, setContent] = useState("");
  const imageRef = useRef<HTMLInputElement>(null);

  const me = {
    id: "zeroCho",
    image: "/x.jpg",
    email: "",
  };

  const onClickButton = () => {
    imageRef.current?.click();
  };

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
  };

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setContent(e.target.value);
  };

  return (
    <form className={"w-full flex flex-col mt-5"} onSubmit={onSubmit}>
      <div className={"flex flex-row items-center justify-between "}>
        <div className={"w-[30px] h-[30px] relative"}>
          <Image
            src={me?.image as string}
            alt={me?.email as string}
            fill
            className="rounded-[30px] mr-2 object-cover -mt-2"
          />
        </div>
        <textarea
          className="flex-1 focus:outline-none text-xl mt-2 ml-2 resize-none"
          value={content}
          onChange={onChange}
          placeholder="답글 게시하기"
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
        <button className="duration-200 text-white bg-blue-300 p-2 text-black rounded-[20px]" onClick={onSubmit}>
          답글
        </button>
      </div>
    </form>
  );
}
