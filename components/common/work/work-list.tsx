import { Work } from "@/models";
import { Box, Divider } from "@mui/material";
import * as React from "react";
import { WorkCard } from "./work-card";

export interface IWorkListProps {
  workList: Work[];
}

export function WorkList({ workList }: IWorkListProps) {
  if (workList.length === 0) return <Box textAlign={"center"}>No data</Box>;
  return (
    <Box>
      {workList.map((work) => (
        <React.Fragment key={work.id}>
          <WorkCard work={work} />
          <Divider sx={{ my: 3 }} />
        </React.Fragment>
      ))}
    </Box>
  );
}
