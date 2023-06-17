import * as React from "react";
import { Box } from "@mui/system";

export interface IHeaderMobileProps {}

export default function HeaderMobile(props: IHeaderMobileProps) {
  return <Box display={{ xs: "block", md: "none" }}>Header mobile</Box>;
}
