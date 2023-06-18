import { Seo } from "@/components/common";
import { HeroSection, RecentPosts, FeaturedWorks } from "@/components/home";
import { MainLayout } from "@/components/layout";
import { NextPageWithLayout } from "@/models";
import { Box } from "@mui/system";
import { useRouter } from "next/router";

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
      {/* <title>Home page</title>
      <Link href="/about" scroll={true} legacyBehavior>
        <a>About page</a>
      </Link>
      <br />
      <button onClick={goToPostDetail}>Go to post details</button>
      <br />
      <button onClick={goToDetailParams}>Go to post details params</button>
      <br />
      <button onClick={goToTestSlugs}>Go to testt slug</button> */}

      <Box>
        <Seo
          data={{
            title: "My Portfolio | Nguyen Van Hieu",
            description:
              "This is Hieu's porfolio page that you can know more about him",
            url: "https://nextjs-learning-vanhieu.vercel.app/",
            thumbnailUrl:
              "https://res.cloudinary.com/dhvh2ocqq/image/upload/v1687096919/seo/i3ofwwxtp7mlu21bajlk.jpg",
          }}
        />
        <HeroSection />
        <RecentPosts />
        <FeaturedWorks />
      </Box>
    </>
  );
};
Home.Layout = MainLayout;

export default Home;
