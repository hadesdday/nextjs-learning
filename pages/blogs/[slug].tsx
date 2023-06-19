import { MainLayout } from "@/components/layout";
import { Blog } from "@/models";
import { getPostList } from "@/utils/blogs";
import { Box, Container, Typography } from "@mui/material";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Link from "next/link";
import rehypeAutolinkHeadings from "rehype-autolink-headings/lib";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkToc from "remark-toc";
import { unified } from "unified";

export interface IBlogDetailsProps {
  blog: Blog;
}

export default function BlogDetailsPage({ blog }: IBlogDetailsProps) {
  if (!blog) return null;

  const { title, author, description, mdContent, htmlContent } = blog;

  return (
    <Box sx={{ pt: 5 }}>
      <Container>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="h5">{author?.name}</Typography>
        <div dangerouslySetInnerHTML={{ __html: htmlContent || "" }}></div>
      </Container>
    </Box>
  );
}

BlogDetailsPage.Layout = MainLayout;

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await getPostList();

  return {
    paths: response.map((i: Blog) => ({
      params: { slug: i.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IBlogDetailsProps> = async (
  context: GetStaticPropsContext
) => {
  const slug = context.params?.slug;
  const blogList = await getPostList();
  let blog = blogList.find((x) => x.slug == slug);

  if (!blog) return { notFound: true };

  const file = await unified()
    .use(remarkParse)
    .use(remarkToc, { heading: "agenda.*" })
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: "wrap" })
    .use(rehypeDocument, { title: blog.title })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(blog.mdContent || "");

  blog.htmlContent = String(file);
  return {
    props: {
      blog,
    },
  };
};
