import Image from "next/image";
import BackButton from "../components/BackButton";
import Post from "../components/Post";
export default function Profile() {
  const user = {
    id: "elonmusk",
    nickname: "Elon Musk",
    images: "/profile.jpg",
  };

  return (
    <div>
      <div className="flex flex-row items-center ">
        <BackButton />
        <h2 className="text-xl ml-2">제로초</h2>
      </div>
      <div className="flex flex-row items-center  mt-5">
        <div className="mr-5 relative w-[100px] h-[100px] rounded-[100px] overflow-hidden ">
          <Image src={user?.images} alt="" fill className="object-cover" />
        </div>
        <div className="flex-1 flex justify-between items-center">
          <div>
            <h2>제로초</h2>
            <span>@zerocho0</span>
          </div>
          <button className="p-2 px-4 text-sm bg-black text-white rounded-full">팔로우</button>
        </div>
      </div>
      <Post />
    </div>
  );
}
