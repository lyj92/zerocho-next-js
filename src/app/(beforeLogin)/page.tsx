import { redirect } from "next/navigation";
import Main from "./components/main";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    redirect("/home");
    return null;
  }

  return <Main />;
}
