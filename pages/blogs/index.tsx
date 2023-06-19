import { Blog } from "@/models";
import { getShortDate } from "@/utils";
import { getPostList } from "@/utils/blogs";
import { Typography } from "@mui/material";
import { GetStaticProps, GetStaticPropsContext } from "next";
import Link from "next/link";
import * as React from "react";

interface BlogListProps {
  blogs: Blog[];
}

export default function BlogListPage({ blogs }: BlogListProps) {
  console.log(blogs);

  return (
    <>
      <Typography variant="h1">List post</Typography>
      <ul>
        {blogs.map((i, index) => {
          return (
            <li key={index}>
              <Link href={`/posts/${i.id}`}>
                <button className="bg-gray-500 m-6">
                  {i.id}-{i.title}-{getShortDate(i.publishedDate)}
                </button>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export const getStaticProps: GetStaticProps<BlogListProps> = async (
  context: GetStaticPropsContext
) => {
  //convert markdown file into list of javascript objects
  const data = await getPostList();

  return {
    props: {
      blogs: data,
    },
  };
};
