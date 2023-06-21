import { Box, Skeleton, Stack, Typography } from "@mui/material";

export function WorkSkeleton() {
  return (
    <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
      <Box width={{ xs: "100%", sm: "246px" }} flexShrink={0}>
        <Skeleton
          variant="rectangular"
          height={180}
          sx={{ width: { xs: "100%", sm: "246px" } }}
        />
      </Box>
      <Box flexGrow={1}>
        <Typography variant="h5" fontWeight={"bold"}>
          <Skeleton />
        </Typography>
        <Stack direction={"row"} my={2} alignItems={"center"}>
          <Skeleton
            variant="rounded"
            width={50}
            height={24}
            about="chipSkeleton"
          />
          <Typography ml={3} color={"GrayText"} flexGrow={1}>
            <Skeleton />
          </Typography>
        </Stack>
        <Typography>
          <Skeleton />
          <Skeleton />
          <Skeleton width={"40%"} />
        </Typography>
      </Box>
    </Stack>
  );
}
