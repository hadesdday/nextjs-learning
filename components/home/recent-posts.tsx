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

export interface IRecentPostsProps {}

export function RecentPosts(props: IRecentPostsProps) {
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
          <Box>
            <PostCard />
          </Box>
          <Box>
            <PostCard />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
