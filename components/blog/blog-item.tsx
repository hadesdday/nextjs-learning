import { Blog } from "@/models";
import { getShortDate } from "@/utils";
import { Box, Divider, Typography, Link as MuiLink } from "@mui/material";
import Link from "next/link";
import * as React from "react";

export interface IBlogItemProps {
  blog: Blog;
}

export function BlogItem({ blog }: IBlogItemProps) {
  return (
    <Box>
      <Typography variant="h5" fontWeight={"bold"}>
        <Link href={`/blogs/${blog.slug}`} passHref legacyBehavior>
          <MuiLink>{blog.title}</MuiLink>
        </Link>
      </Typography>
      <Box my={2} sx={{ display: "flex" }}>
        {getShortDate(blog.publishedDate)}

        <Divider orientation="vertical" sx={{ mx: 2 }} flexItem />

        {blog.tagList.join(", ")}
      </Box>
      <Typography variant="body2">{blog.description}</Typography>
    </Box>
  );
}
