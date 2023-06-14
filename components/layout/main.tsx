import { LayoutProps } from "@/models/common";
import Link from "next/link";
import * as React from "react";

export interface IMainLayoutProps {}

export function MainLayout({ children }: LayoutProps) {
  React.useEffect(() => {
    console.log("mainlayout mounting");
    return () => console.log("mainlayout unmounting");
  }, []);
  return (
    <div>
      <h1 className="text-4xl font-bold">Main layout</h1>
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
      <div>{children}</div>
    </div>
  );
}
