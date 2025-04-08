import Tab from "./components/Tab";
import TabProvider from "./components/tabProvider";
import PostForm from "./components/PostForm";
import TabDecider from "./components/TabDecider";
import TabDeciderSuspense from "./components/TabDeciderSuspense";
import { Suspense } from "react";
import Loading from "./loading";

export default async function Home() {
  return (
    <div className="overflow-hidden">
      <TabProvider>
        <Tab />
        <PostForm />
        <Suspense fallback={<Loading />}>
          <TabDeciderSuspense />
        </Suspense>
        <TabDecider />
      </TabProvider>
    </div>
  );
}
