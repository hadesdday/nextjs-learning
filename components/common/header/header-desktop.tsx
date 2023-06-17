import * as React from "react";
import { Container, Stack, Link as MuiLink } from "@mui/material";
import { ROUTE_LIST } from "./routes";
import { Box } from "@mui/system";
import Link from "next/link";

export interface IHeaderDesktopProps {}

export default function HeaderDesktop(props: IHeaderDesktopProps) {
  return (
    <Box display={{ xs: "none", md: "block" }} py={2}>
      <Container>
        <Stack direction={"row"} justifyContent={"flex-end"}>
          {ROUTE_LIST.map((route) => (
            <Link key={route.path} href={route.path} legacyBehavior passHref>
              <MuiLink
                sx={{
                  ml: 2,
                }}
                underline="none"
              >
                {route.label}
              </MuiLink>
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
