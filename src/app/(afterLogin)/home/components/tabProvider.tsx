"use client";

import { createContext, useState } from "react";

export const tabContext = createContext({
  tab: "rec",
  setTab: (value: "rec" | "fol") => {},
});

type Props = {
  children: React.ReactNode;
};

export default function TabProvider({ children }: Props) {
  const [tab, setTab] = useState("");

  return (
    <tabContext.Provider value={{ tab, setTab }}>
      {children}
    </tabContext.Provider>
  );
}
