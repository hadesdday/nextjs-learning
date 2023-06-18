import { Card, CardContent, Typography } from "@mui/material";
import * as React from "react";

export interface IPostCardProps {}

export function PostCard(props: IPostCardProps) {
  return (
    <Card>
      <CardContent>
        <Typography>hello</Typography>
      </CardContent>
    </Card>
  );
}
