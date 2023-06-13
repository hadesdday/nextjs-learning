import { log } from "console";
import { useRouter } from "next/router";
import * as React from "react";

export interface IAboutPageProps {
  name: string;
}

export default function App(props: IAboutPageProps) {
  const router = useRouter();
  console.log("about query", router.query);

  // React.useEffect(() => {
  //   //must check if router query is undefined cause at first time it will be undefined
  // }, []);
  return <div>Hello from about page </div>;
}

// export async function getServerSideProps() {
//   return {
//     props: {
//       name: "hello",
//     }, //this will make component not as aso ( must down the js file to execute )
//   };
// }
