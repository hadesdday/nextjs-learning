import { WorkList } from "@/components/common/work";
import { MainLayout } from "@/components/layout";
import { useWorkList } from "@/hooks";
import { ListParams } from "@/models";
import { Box, Container, Pagination, Stack, Typography } from "@mui/material";
import * as React from "react";

export interface IWorksPageProps {}

export default function WorksPage(props: IWorksPageProps) {
  const [filters, setFilters] = React.useState<Partial<ListParams>>({
    _page: 1,
    _limit: 5,
  });
  const { data, isLoading } = useWorkList({ params: filters });

  const totalPages = Boolean(data?.pagination)
    ? Math.ceil(data.pagination._totalRows / data.pagination._limit)
    : 0;
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

  function handleChangePage(
    event: React.ChangeEvent<unknown>,
    pageNumber: number
  ) {
    setFilters((prevFilter) => ({
      ...prevFilter,
      _page: pageNumber,
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
        <WorkList workList={data?.data || []} loading={isLoading} />
        {totalPages > 0 && (
          <Stack direction={"row"} justifyContent={"center"}>
            <Pagination
              count={totalPages}
              page={filters._page}
              onChange={handleChangePage}
            />
          </Stack>
        )}
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
