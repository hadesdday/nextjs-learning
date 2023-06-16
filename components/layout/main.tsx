import { LayoutProps } from "@/models/common";
import { Box, Stack } from "@mui/material";
import Link from "next/link";
import * as React from "react";
import { Header } from "../common";
import { Footer } from "../common/footer";

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
        <Link href={"/"}>Home</Link>
        <Link href={"/blogs"}>Blogs</Link>
        <Link href={"/works"}>Works</Link>
        {children}
      </Box>
      <Footer />
    </Stack>
  );
}
