import { MainLayout } from "@/components/layout";
import { Blog } from "@/models";
import { getPostList } from "@/utils/blogs";
import {
  Avatar,
  Box,
  Container,
  Stack,
  Typography,
  Link as MuiLink,
  Divider,
  Button,
  Icon,
} from "@mui/material";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import rehypeAutolinkHeadings from "rehype-autolink-headings/lib";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkPrism from "remark-prism";
import remarkRehype from "remark-rehype";
import remarkToc from "remark-toc";
import { unified } from "unified";
import Script from "next/script";
import { Seo } from "@/components/common";
import { getFullDate, getGithubUsername, getShortDate } from "@/utils";
import Link from "next/link";
import { KeyboardBackspace } from "@mui/icons-material";

export interface IBlogDetailsProps {
  blog: Blog;
}

export default function BlogDetailsPage({ blog }: IBlogDetailsProps) {
  if (!blog) return null;

  const {
    title,
    author,
    description,
    htmlContent,
    slug,
    thumbnailUrl,
    publishedDate,
  } = blog;

  return (
    <Box sx={{ pt: 5 }}>
      <Seo
        data={{
          title: title,
          description: description,
          url: `https://nextjs-learning-vanhieu.vercel.app/blogs/${slug}`,
          thumbnailUrl:
            thumbnailUrl ||
            "https://raw.githubusercontent.com/vercel/serve/main/media/banner.png",
        }}
      />
      <Container>
        <Typography variant="h4" fontWeight={"bold"}>
          {title}
        </Typography>
        <Typography
          component="p"
          textAlign={"center"}
          py={2}
          fontSize={"smaller"}
          color={"GrayText"}
        >
          {getFullDate(publishedDate)}
        </Typography>
        <Stack
          direction={"row"}
          spacing={1}
          justifyContent={"center"}
          pt={2}
          pb={8}
        >
          <Avatar src={author?.avatarUrl} />
          <Stack direction={"column"}>
            <Typography component="p" fontWeight={600} fontSize={"0.9em"}>
              {author?.name}
            </Typography>
            <Link href={author?.profileUrl || ""} passHref legacyBehavior>
              <MuiLink
                variant="body2"
                target="_blank"
                about="blogAuthor"
                sx={{ fontSize: "12px" }}
              >
                @{getGithubUsername(author?.profileUrl || "user")}
              </MuiLink>
            </Link>
          </Stack>
        </Stack>
        <Divider sx={{ mb: 8 }} />
        <div dangerouslySetInnerHTML={{ __html: htmlContent || "" }}></div>
        <Script src="/prism.js" strategy="afterInteractive"></Script>
        <Box pt={10} pb={5}>
          <Link href={"/blogs"} passHref legacyBehavior>
            <Button variant="contained">
              <KeyboardBackspace fontSize="small" />
              Back to blogs
            </Button>
          </Link>
        </Box>
        <Divider sx={{ pt: 3 }} />
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
    .use(remarkPrism)
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
