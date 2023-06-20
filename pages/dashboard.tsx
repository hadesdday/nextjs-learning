import { AdminLayout } from "@/components/layout";
import Link from "next/link";
import * as React from "react";

export interface IDashboardPageProps {}

const DashboardPage = (props: IDashboardPageProps) => {
  return (
    <div>
      <div>Dashboard page</div>
      <Link href={"/login"}>Try login</Link>
    </div>
  );
};

DashboardPage.Layout = AdminLayout;

export default DashboardPage;
