import { MoonLoader } from "react-spinners";

/**
 *
 * @param
 * page.tsx -> loading.tsx
 * 서버 Suspense -> fallback
 * react - query -> isPending
 */

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: "20px auto 0",
      }}
    >
      <MoonLoader size={50} />
    </div>
  );
}
