import { auth as middleware } from "@/auth";

// 로그인을 해야지만 접근할수 있는 페이지
export const config = {
  matcher: ["/compose/tweet", "/home", "/explore", "/message", "/search"],
};
export default middleware;
