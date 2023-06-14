import { GetStaticProps, GetStaticPropsContext } from "next";
import Link from "next/link";
import * as React from "react";

interface Post {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  author: string;
}

interface PageProps {
  posts: Post[];
}

export default function Posts(props: PageProps) {
  console.log("size", props.posts.length);

  return (
    <>
      <button className="text-lg font-bold">List post</button>
      <ul>
        {props.posts.map((i, index) => {
          return (
            <li key={index}>
              <Link href={`/posts/${i.id}`}>
                <button className="bg-gray-500 m-6">
                  {i.id}-{i.title}
                </button>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export const getStaticProps: GetStaticProps<PageProps> = async (
  context: GetStaticPropsContext
) => {
  //this run from server(nodejs server)
  const response = await fetch(
    "https://js-post-api.herokuapp.com/api/posts/?_page=1"
  );

  const data = await response.json();

  return {
    //build o server-side
    //run luc build time
    //ko duoc dung chung getServerSideProps neu dung chung se loi
    //neu dung ssr thi bo het
    props: {
      posts: [...data.data],
    },
  };
};
