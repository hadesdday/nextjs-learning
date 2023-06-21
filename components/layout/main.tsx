import { LayoutProps } from "@/models/common";
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { Footer } from "../common/footer";
import { Header } from "../common/header";

export interface IMainLayoutProps {}

export function MainLayout({ children }: LayoutProps) {
  React.useEffect(() => {
    console.log("mainlayout mounting");
    return () => console.log("mainlayout unmounting");
  }, []);

  // const Header = dynamic(() => import("@/components/common/header").then(mod => mod.Header), { ssr: false });
  //use this to fix hydration problem ( but this is not seo friendly )
  //if use this please export default function Header instead of export function
  return (
    <Stack minHeight={"100vh"} flexGrow={1}>
      <Header />
      <Box component={"main"}>{children}</Box>
      <Footer />
    </Stack>
  );
}
