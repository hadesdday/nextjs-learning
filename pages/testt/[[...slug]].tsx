import { useRouter } from "next/router";
import * as React from "react";

export interface ITestSlugProps {}

export default function TestSlug(props: ITestSlugProps) {
  const router = useRouter();

  return (
    <div>
      many slugg
      {JSON.stringify(router.query)}
    </div>
  );
}
