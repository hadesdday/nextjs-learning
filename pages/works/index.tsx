import { workApi } from "@/api-client";
import { MainLayout } from "@/components/layout";
import * as React from "react";

export interface IWorksPageProps {}

export default function WorksPage(props: IWorksPageProps) {
  React.useEffect(() => {
    (async () => {
      try {
        const workList = await workApi.getAll({});
        console.log("alo", workList);
      } catch (error) {
        console.log("failed works list", error);
      }
    })();
  }, []);
  return <div>Works page</div>;
}

WorksPage.Layout = MainLayout;

export async function getStaticProps() {
  return {
    props: {},
  };
}
