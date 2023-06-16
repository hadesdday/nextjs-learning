import { AdminLayout } from "@/components/layout";
import * as React from "react";

export interface IDashboardPageProps {}

const DashboardPage = (props: IDashboardPageProps) => {
  return (
    <div>
      <div>Dashboard page</div>;
    </div>
  );
};

DashboardPage.Layout = AdminLayout;

export default DashboardPage;
