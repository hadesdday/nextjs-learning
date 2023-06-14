import { log } from "console";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

export interface IPostDetailsProps {
  postDetails: any;
}

export default function PostDetails(props: IPostDetailsProps) {
  const router = useRouter();
  if (router.isFallback) {
    return <div className="text-lg">Loading...</div>;
  }
  // const { postId } = router.query;
  if (!props.postDetails) return null;
  const { id, title, author, description, createdAt, updatedAt, imageUrl } =
    props.postDetails;
  return (
    <div>
      <Link href={"/posts"}>Back to posts</Link>
      <br />
      post {id} details page
      <ul>
        <li>{title}</li>
        <li>{author}</li>
        <li>{description}</li>
        <li>{createdAt}</li>
        <li>{updatedAt}</li>
        <li>{imageUrl}</li>
      </ul>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  console.log("get static path");
  //run this first and build data to json file , ui to html file
  // build to N html and json file contains its data
  const response = await fetch(
    "https://js-post-api.herokuapp.com/api/posts/?_page=1"
  );

  let data = await response.json();

  return {
    paths: data.data.map((i: any) => ({
      params: { postId: i.id },
    })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<IPostDetailsProps> = async (
  context: GetStaticPropsContext
) => {
  //this run from server(nodejs server)
  log("get static props", context.params?.postId);
  const postId = context.params?.postId; // lay param tu url
  if (!postId) return { notFound: true };
  const response = await fetch(
    `https://js-post-api.herokuapp.com/api/posts/${postId}`
  );

  const data = await response.json();
  // log("data", data);
  return {
    //build o server-side
    //run luc build time
    //ko duoc dung chung getServerSideProps neu dung chung se loi
    //neu dung ssr thi bo het
    props: {
      postDetails: data,
    },
    revalidate: 5, //only work in production mode
  };
};
