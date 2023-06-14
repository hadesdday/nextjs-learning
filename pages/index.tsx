import { MainLayout } from "@/components/layout";
import { NextPageWithLayout } from "@/models";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPageWithLayout = () => {
  const router = useRouter();

  const goToPostDetail = () => {
    router.push({
      pathname: "/posts/[postId]",
      query: {
        postId: 666,
        ref: "home",
      },
    });
  };

  const goToDetailParams = () => {
    router.push({
      pathname: "/posts/[...params]",
      query: {
        params: ["123", "444"],
        ref: "home",
      },
    });
  };

  const goToTestSlugs = () => {
    router.push({
      pathname: "/testt/[[...slug]]",
      query: {
        slug: ["123", "gg", "ss"],
        ref: "home",
      },
    });
  };
  return (
    <>
      <title>Home page</title>
      <Link href="/about" scroll={true} legacyBehavior>
        <a>About page</a>
      </Link>
      <br />
      <button onClick={goToPostDetail}>Go to post details</button>
      <br />
      <button onClick={goToDetailParams}>Go to post details params</button>
      <br />
      <button onClick={goToTestSlugs}>Go to testt slug</button>
    </>
  );
};
Home.Layout = MainLayout;

export default Home;
