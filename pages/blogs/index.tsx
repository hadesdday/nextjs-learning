import { BlogItem } from "@/components/blog";
import { MainLayout } from "@/components/layout";
import { Blog } from "@/models";
import { getPostList } from "@/utils/blogs";
import { Box, Container, Divider, Typography } from "@mui/material";
import { GetStaticProps, GetStaticPropsContext } from "next";

interface BlogListProps {
  blogs: Blog[];
}

export default function BlogListPage({ blogs }: BlogListProps) {
  return (
    <Box>
      <Container sx={{ pt: { xs: 2, sm: 4 } }}>
        <Typography variant="h4" fontWeight={"bold"} py={4}>
          Blog
        </Typography>
        <Box component={"ul"} sx={{ listStyleType: "none", p: 0 }}>
          {blogs.map((blog, index) => {
            return (
              <li key={index}>
                <BlogItem blog={blog} />
                <Divider sx={{ my: 3 }} />
              </li>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}

BlogListPage.Layout = MainLayout;

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
