import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import * as React from "react";

export interface IParamsProps {}

export default function ParamsPage(props: IParamsProps) {
  const router = useRouter();
  const params = router.query;
  return (
    <div>
      params page
      {JSON.stringify(params)}
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // fake slow query
  //every request must wait 3 seconds to render
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return {
    props: {},
  };
}
