"use client";

import { Suspense, use } from "react";
import { handlers } from "@/mocks/handlers";

const mockingEnabledPromise =
  typeof window !== "undefined"
    ? import("@/mocks/browser").then(async ({ default: worker }) => {
        if (process.env.NODE_ENV === "production") {
          return;
        }
        await worker.start({
          onUnhandledRequest(request: Request, print) {
            if (request.url.includes("_next")) {
              // next 자체 서버에서 처리 msw에서 처리하지 않음
              return; // 아무 동작 하지 않음
            }
            print.warning();
          },
        });
        worker.use(...handlers);
        (module as any).hot?.dispose(() => {
          worker.stop();
        });
        console.log(worker.listHandlers());
      })
    : Promise.resolve();

export function MSWProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // If MSW is enabled, we need to wait for the worker to start,
  // so we wrap the children in a Suspense boundary until it's ready.
  return (
    <Suspense fallback={null}>
      <MSWProviderWrapper>{children}</MSWProviderWrapper>
    </Suspense>
  );
}

function MSWProviderWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  use(mockingEnabledPromise);
  return children;
}
