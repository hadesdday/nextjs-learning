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
