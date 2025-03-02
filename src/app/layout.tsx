import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import { MSWProvider } from "./components/MSWComponent";

if (process.env.NEXT_RUNTIME === "nodejs" && process.env.NODE_ENV !== "production") {
  const { server } = require("@/mocks/http");
  server.listen();
}

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MSWProvider>{children}</MSWProvider>
      </body>
    </html>
  );
}
