import { DehazeOutlined } from "@mui/icons-material";
import {
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Link as MuiLink,
  Stack,
} from "@mui/material";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import { Box } from "@mui/system";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { ROUTE_LIST } from "./routes";
import { useAuth } from "@/hooks";

export interface IHeaderMobileProps {}

export default function HeaderMobile(props: IHeaderMobileProps) {
  const [showDrawer, setShowDrawer] = React.useState<boolean>(false);

  const toggleDrawer = () => setShowDrawer(!showDrawer);

  const router = useRouter();

  const { profile, logout } = useAuth();
  const isLoggedIn = Boolean(profile?.username);

  const [routeList, setRouteList] = React.useState(() =>
    ROUTE_LIST.filter((route) => !route.requireLogin)
  );
  const [loggedInStatus, setLoggedInStatus] = React.useState<boolean>(false);

  React.useEffect(() => {
    //after the first render run this
    //calc routeList and setRouteList
    setRouteList(
      ROUTE_LIST.filter((route) => !route.requireLogin || isLoggedIn)
    );
    setLoggedInStatus(isLoggedIn);
  }, [isLoggedIn]);

  async function handleLogout() {
    await toggleDrawer();
    await logout();
  }

  return (
    <Box display={{ xs: "block", md: "none" }}>
      <Container>
        <Stack direction={"row"} justifyContent={"flex-end"}>
          <React.Fragment key={"right"}>
            <Button onClick={toggleDrawer} about="toggleDrawer">
              <DehazeOutlined />
            </Button>
            <Drawer anchor={"right"} open={showDrawer} onClose={toggleDrawer}>
              <List>
                {routeList.map((route) => (
                  <ListItem key={route.path} onClick={toggleDrawer}>
                    <ListItemButton>
                      <Link
                        key={route.path}
                        href={route.path}
                        legacyBehavior
                        passHref
                      >
                        <MuiLink
                          sx={{
                            ml: 2,
                            fontWeight: "medium",
                          }}
                          underline="none"
                          className={clsx({
                            active: router.pathname === route.path,
                          })}
                        >
                          <ListItemText primary={route.label} />
                        </MuiLink>
                      </Link>
                    </ListItemButton>
                  </ListItem>
                ))}
                {loggedInStatus ? (
                  <ListItem key={"/logout"} onClick={handleLogout}>
                    <ListItemButton>
                      <MuiLink
                        sx={{
                          ml: 2,
                          fontWeight: "medium",
                        }}
                        underline="none"
                      >
                        <ListItemText primary={"Logout"} />
                      </MuiLink>
                    </ListItemButton>
                  </ListItem>
                ) : (
                  <ListItem key={"/login"} onClick={toggleDrawer}>
                    <ListItemButton>
                      <Link
                        key={"/login"}
                        href={"/login"}
                        legacyBehavior
                        passHref
                      >
                        <MuiLink
                          sx={{
                            ml: 2,
                            fontWeight: "medium",
                          }}
                          underline="none"
                        >
                          <ListItemText primary={"Login"} />
                        </MuiLink>
                      </Link>
                    </ListItemButton>
                  </ListItem>
                )}
              </List>
            </Drawer>
          </React.Fragment>
        </Stack>
      </Container>
    </Box>
  );
}
