import { LayoutProps } from "@/models/common";
import { Stack, Container } from "@mui/material";
import Link from "next/link";
import * as React from "react";
import { Footer } from "../common/footer";
import { Header } from "../common/header";
import { Box } from "@mui/system";

export interface IMainLayoutProps {}

export function MainLayout({ children }: LayoutProps) {
  React.useEffect(() => {
    console.log("mainlayout mounting");
    return () => console.log("mainlayout unmounting");
  }, []);
  return (
    <Stack minHeight={"100vh"} flexGrow={1}>
      <Header />
      <Box component={"main"}>
        <Container maxWidth="sm" sx={{ bgcolor: "primary.main" }}>
          SM
        </Container>
        <Container sx={{ bgcolor: "primary.main" }}>MD</Container>
        <Link href={"/"}>Home</Link>
        <Link href={"/blogs"}>Blogs</Link>
        <Link href={"/works"}>Works</Link>
        {children}
      </Box>
      <Footer />
    </Stack>
  );
}
