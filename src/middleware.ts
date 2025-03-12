import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function middleware() {
  const session = await auth();
  if (!session) {
    return NextResponse.redirect("http://localhost:3000/i/flow/login");
  }
}

// 로그인을 해야지만 접근할수 있는 페이지
export const config = {
  matcher: ["/compose/tweet", "/home", "/explore", "/message", "/search"],
};
