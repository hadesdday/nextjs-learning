import { Post } from "@/models";
import { getShortDate } from "@/utils";
import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import * as React from "react";

export interface IPostCardProps {
  post: Post;
}

export function PostCard({ post }: IPostCardProps) {
  if (!post) return null;
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" fontWeight={"bold"}>
          {post.title}
        </Typography>
        <Box my={2} sx={{ display: "flex" }}>
          {getShortDate(post.publishedDate)}

          <Divider orientation="vertical" sx={{ mx: 2 }} flexItem />

          {post.tagList.join(", ")}
        </Box>
        <Typography variant="body2">{post.description}</Typography>
      </CardContent>
    </Card>
  );
}
