import { Work } from "@/models";
import { Box, Divider } from "@mui/material";
import * as React from "react";
import { WorkCard } from "./work-card";
import { WorkSkeleton } from "./work-skeleton";

export interface IWorkListProps {
  workList: Work[];
  loading?: boolean;
}

export function WorkList({ workList, loading }: IWorkListProps) {
  if (loading)
    return (
      <Box>
        {Array.from({ length: 3 }).map((_, index) => (
          <React.Fragment key={index}>
            <WorkSkeleton />
            <Divider sx={{ my: 3 }} />
          </React.Fragment>
        ))}
      </Box>
    );
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
