import BackButton from "@/app/(afterLogin)/components/BackButton";
import Post from "@/app/(afterLogin)/components/Post";
import CommentForm from "./components/CommentForm";
export default function SinglePost() {
  return (
    <div>
      <div className="flex flex-row items-center my-2">
        <BackButton />
        <h2 className="text-xl font-semibold ml-2">게시하기</h2>
      </div>
      <div className="my-10">
        <Post />
        <CommentForm id={""} />
      </div>
    </div>
  );
}
