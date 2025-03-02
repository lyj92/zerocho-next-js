import Image from "next/image";
import { img } from "../../../../public";
export default function FollowRecommend() {
  return (
    <div className="flex flex-row justify-between items-center my-5">
      <div className="flex flex-row ">
        <div className="w-[40px] h-[40px] rounded-[40px] overflow-hidden relative mr-2">
          <Image src={img.x} alt="" fill className="object-cover" />
        </div>
        <div className="flex flex-col">
          <div className="font-semibold text-sm">Elon Musk</div>
          <div className="text-xs font-light">@elonemusk</div>
        </div>
      </div>
      <div className="w-[100px] h-[30px] py-1 flex justify-center items-center rounded-[100px] text-white bg-black cursor-pointer text-xs font-light">
        팔로우
      </div>
    </div>
  );
}
