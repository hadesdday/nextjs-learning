import Header from "@/components/common/header";
import { MainLayout } from "@/components/layout";
import Link from "next/link";
// import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import * as React from "react";

export interface IAboutPageProps {
  name: string;
}

// const DynamicHeader = dynamic(() => import("@/components/common/header"), {
//   ssr: true,
// });

export default function AboutPage(props: IAboutPageProps) {
  const [postList, setPostList] = React.useState([]);

  const router = useRouter();
  const page = router.query?.page;
  //goi cai nay se lam hydrate them lan nua
  console.log("about query", router.query);

  //use effect nay chi chay phia client
  React.useEffect(() => {
    if (!page) return;
    (async () => {
      const response = await fetch(
        `https://js-post-api.herokuapp.com/api/posts/?_page=${page}`
      );

      let data = await response.json();
      setPostList(data.data);
    })();
  }, [page]);

  // React.useEffect(() => {
  //   //must check if router query is undefined cause at first time it will be undefined
  // }, []);

  function handleClick() {
    router.push(
      {
        pathname: "/about",
        query: {
          page: (Number(page) || 1) + 1,
        },
      },
      undefined,
      { shallow: true } //trigger update tu client side thoi ko chay getStaticProps nua
    );
  }
  return (
    <>
      <h1 className="text-4xl font-bold">Hello from about page</h1>
      {/* <DynamicHeader /> */}
      <Header />
      <ul className="postlist">
        {postList.map((i: any) => (
          <li key={i.id}>{i.id}</li>
        ))}
      </ul>
      <button onClick={handleClick} className="bg-slate-400 shadow-sm m-2">
        Click me
      </button>
      <Link href="/dashboard">Dashboard</Link>
    </>
  );
}

AboutPage.Layout = MainLayout; //su dung main layout cho trang nay

export async function getStaticProps() {
  console.log("get static props");

  return {
    props: {},
  };
}

// export async function getServerSideProps() {
//   return {
//     props: {
//       name: "hello",
//     }, //this will make component not as aso ( must down the js file to execute )
//   };
// }
