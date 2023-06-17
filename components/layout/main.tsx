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
      <Box component={"main"}>{children}</Box>
      <Footer />
    </Stack>
  );
}
