import { Work } from "@/models";
import { Box, Chip, Stack, Typography } from "@mui/material";
import Image from "next/legacy/image";

export interface IWorkCardProps {
  work: Work;
}

export function WorkCard({ work }: IWorkCardProps) {
  return (
    <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
      <Box width={{ xs: "100%", sm: "246px" }} flexShrink={0}>
        <Image
          src={work.thumbnailUrl}
          width={246}
          height={180}
          alt="thumbnail"
          layout="responsive"
        />
      </Box>
      <Box>
        <Typography variant="h5" fontWeight={"bold"}>
          {work.title}
        </Typography>
        <Stack direction={"row"} my={2}>
          <Chip
            color="secondary"
            label={new Date(work.createdAt).getFullYear()}
            size="small"
          />
          <Typography ml={3} color={"GrayText"}>
            {work.tagList.join(", ")}
          </Typography>
        </Stack>
        <Typography>{work.shortDescription}</Typography>
      </Box>
    </Stack>
  );
}
