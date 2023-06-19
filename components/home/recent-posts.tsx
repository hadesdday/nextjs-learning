import {
  Box,
  Container,
  Stack,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import Link from "next/link";
import * as React from "react";
import { PostCard } from "./post-card";
import { Blog } from "@/models";

export interface IRecentPostsProps {}

export function RecentPosts(props: IRecentPostsProps) {
  const postList: Blog[] = [
    {
      id: "1",
      slug: "",
      title: "Making a design system from scratch",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      publishedDate: 1687073318705,
      tagList: ["Design", "Pattern"],
    },
    {
      id: "2",
      slug: "",
      title: "Creating pixel perfect icons in Figma",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      publishedDate: 1687073318705,
      tagList: ["Figma", "Icon Design"],
    },
  ];

  return (
    <Box component={"section"} bgcolor={"secondary.light"} py={4} pt={2}>
      <Container>
        <Stack
          direction={"row"}
          mb={2}
          justifyContent={{ xs: "center", md: "space-between" }}
          alignItems={"center"}
        >
          <Typography variant="h5">Recent posts</Typography>
          <Link href={"/blogs"} passHref legacyBehavior>
            <MuiLink display={{ xs: "none", md: "inline-block" }}>
              View all
            </MuiLink>
          </Link>
        </Stack>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{ "& > div": { width: { xs: "100%", md: "50%" } } }}
        >
          {postList.map((post) => (
            <Box key={post.id}>
              <PostCard blog={post} />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
