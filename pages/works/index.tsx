import { workApi } from "@/api-client";
import { WorkList } from "@/components/common/work";
import { MainLayout } from "@/components/layout";
import { useWorkList } from "@/hooks";
import { ListParams } from "@/models";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import * as React from "react";

export interface IWorksPageProps {}

export default function WorksPage(props: IWorksPageProps) {
  const [filters, setFilters] = React.useState<Partial<ListParams>>({
    _page: 1,
    _limit: 5,
  });
  const { data, isLoading } = useWorkList({ params: filters });

  // React.useEffect(() => {
  //   (async () => {
  //     try {
  //       const workList = await workApi.getAll({});
  //       console.log("alo", workList);
  //     } catch (error) {
  //       console.log("failed works list", error);
  //     }
  //   })();
  // }, []);

  function handleNextPage() {
    setFilters((prevFilter) => ({
      ...prevFilter,
      _page: (prevFilter._page || 0) + 1,
    }));
  }

  function handlePreviousPage() {
    setFilters((prevFilter) => ({
      ...prevFilter,
      _page: (prevFilter._page || 2) - 1,
    }));
  }

  return (
    <Box>
      <Container>
        <Box mb={4} mt={8}>
          <Typography component="h1" variant="h4" fontWeight={"bold"}>
            Works
          </Typography>
        </Box>
        {isLoading ? (
          <Box textAlign={"center"}>
            <CircularProgress color="inherit" size={"8em"} />
          </Box>
        ) : (
          <WorkList workList={data?.data || []} />
        )}
        <Box>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Button variant="contained" onClick={handlePreviousPage}>
              Previous page
            </Button>
            <Button variant="contained" onClick={handleNextPage}>
              Next page
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

WorksPage.Layout = MainLayout;

export async function getStaticProps() {
  return {
    props: {},
  };
}
