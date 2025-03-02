"use client";

import style from "@/app/(afterLogin)/messages/message.module.css";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import { useEffect, useState } from "react";

dayjs.locale("ko");
dayjs.extend(relativeTime);

export default function Room() {
  const router = useRouter();
  const [avatarUrl, setAvatarUrl] = useState("");

  const user = {
    id: "hero",
    nickname: "영웅",
    Messages: [
      { roomId: 123, content: "안녕하세요.", createdAt: new Date() },
      { roomId: 123, content: "안녕히가세요.", createdAt: new Date() },
    ],
  };

  // 클라이언트 사이드에서만 faker를 사용하여 아바타 생성
  useEffect(() => {
    // 임의의 고정된 아바타 URL 사용
    setAvatarUrl(`https://avatars.githubusercontent.com/u/${Math.floor(Math.random() * 100000) + 10000}`);

    // faker를 사용하려면 아래와 같이 동적으로 import
    // const loadFaker = async () => {
    //   const { faker } = await import('@faker-js/faker');
    //   setAvatarUrl(faker.image.avatar());
    // };
    // loadFaker();
  }, []);

  const onClick = () => {
    router.push(`/messages/${user.Messages.at(-1)?.roomId}`);
  };

  return (
    <div className={style.room} onClickCapture={onClick}>
      <div className={style.roomUserImage}>
        {/* 클라이언트 사이드 렌더링 전에는 빈 이미지를 표시 */}
        {avatarUrl ? <img src={avatarUrl} alt="" /> : <div className={style.placeholder}></div>}
      </div>
      <div className={style.roomChatInfo}>
        <div className={style.roomUserInfo}>
          <b>{user.nickname}</b>
          &nbsp;
          <span>@{user.id}</span>
          &nbsp; · &nbsp;
          <span className={style.postDate}>{dayjs(user.Messages.at(-1)?.createdAt).fromNow(true)}</span>
        </div>
        <div className={style.roomLastChat}>{user.Messages.at(-1)?.content}</div>
      </div>
    </div>
  );
}
