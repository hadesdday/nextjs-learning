import * as React from "react";
import { Container, Stack, Link as MuiLink } from "@mui/material";
import { ROUTE_LIST } from "./routes";
import { Box } from "@mui/system";
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";
import { useAuth } from "@/hooks";

export interface IHeaderDesktopProps {}

export default function HeaderDesktop(props: IHeaderDesktopProps) {
  const router = useRouter();
  const { profile, logout } = useAuth();
  const isLoggedIn = Boolean(profile?.username);

  const routeList = ROUTE_LIST.filter(
    (route) => !route.requireLogin || isLoggedIn
  );

  return (
    <Box display={{ xs: "none", md: "block" }} py={2}>
      <Container>
        <Stack direction={"row"} justifyContent={"flex-end"}>
          {routeList.map((route) => (
            <Link key={route.path} href={route.path} legacyBehavior passHref>
              <MuiLink
                sx={{
                  ml: 2,
                  fontWeight: "medium",
                  cursor: "pointer",
                }}
                underline="none"
                className={clsx({ active: router.pathname === route.path })}
              >
                {route.label}
              </MuiLink>
            </Link>
          ))}
          {isLoggedIn ? (
            <MuiLink
              sx={{
                ml: 2,
                fontWeight: "medium",
                cursor: "pointer",
              }}
              underline="none"
              onClick={logout}
            >
              Logout
            </MuiLink>
          ) : (
            <Link key={"/login"} href={"/login"} legacyBehavior passHref>
              <MuiLink
                sx={{
                  ml: 2,
                  fontWeight: "medium",
                  cursor: "pointer",
                }}
                underline="none"
              >
                Login
              </MuiLink>
            </Link>
          )}
        </Stack>
      </Container>
    </Box>
  );
}
