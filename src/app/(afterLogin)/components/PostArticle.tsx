"use client";

import { useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
  post: {
    postId: number;
    content: string;
    User: {
      id: string;
      nickname: string;
      image: string;
    };
    createdAt: Date;
    Images: Array<{
      imageId: number;
      ImageId?: number;
      link: string;
    }>;
  };
};

export default function PostArticle({ children, post }: Props) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/${post?.User?.id}/status/${post.postId}`);
  };
  return (
    <article className="flex flex-col p-5 duration-200 hover:bg-gray-100 cursor-pointer" onClickCapture={onClick}>
      {children}
    </article>
  );
}
