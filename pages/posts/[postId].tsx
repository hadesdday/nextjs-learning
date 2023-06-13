import { useRouter } from "next/router";
import * as React from "react";

export interface IPostDetailsProps {}

export default function PostDetails(props: IPostDetailsProps) {
  const router = useRouter();
  const { postId } = router.query;
  return <div>post {postId} details page</div>;
}
