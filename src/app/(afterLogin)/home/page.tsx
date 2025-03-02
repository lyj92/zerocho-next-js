import Tab from "./components/Tab";
import TabProvider from "./components/tabProvider";
import PostForm from "./components/PostForm";
import Post from "../components/Post";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <TabProvider>
        <Tab />
        <PostForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </TabProvider>
    </div>
  );
}
