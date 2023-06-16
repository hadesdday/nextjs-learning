import { LayoutProps } from "@/models/common";
import Link from "next/link";
import * as React from "react";
import { Auth } from "../common";
import { useAuth } from "@/hooks";

export interface IAdminLayoutProps {}

export function AdminLayout({ children }: LayoutProps) {
  const { profile, logout } = useAuth();

  async function onLogout() {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Auth>
      <h1>Admin layout</h1>
      <div>Sidebar</div>
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
      <p>Hello ,{profile?.username}</p>
      <button onClick={onLogout}>Logout</button>
      <div>{children}</div>
    </Auth>
  );
}
