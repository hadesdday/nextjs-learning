import { WorkFilters, WorkList } from "@/components/common/work";
import { MainLayout } from "@/components/layout";
import { useWorkList } from "@/hooks";
import { ListParams, WorkFiltersPayload } from "@/models";
import { Box, Container, Pagination, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import * as React from "react";

export interface IWorksPageProps {}

export default function WorksPage(props: IWorksPageProps) {
  const router = useRouter();
  const filters: Partial<ListParams> = { _page: 1, _limit: 5, ...router.query };

  const initialFiltersPayload: WorkFiltersPayload = {
    search: filters.title_like || "",
  };

  const { data, isLoading } = useWorkList({
    params: filters,
    enabled: router.isReady,
  });

  const totalPages = Boolean(data?.pagination)
    ? Math.ceil(data.pagination._totalRows / data.pagination._limit)
    : 0;

  function handleChangePage(
    event: React.ChangeEvent<unknown>,
    pageNumber: number
  ) {
    router.push(
      {
        pathname: router.pathname,
        query: {
          ...filters,
          _page: pageNumber,
        },
      },
      undefined,
      { shallow: true }
    );
  }

  function handleFilterChange(newFilters: WorkFiltersPayload) {
    router.push(
      {
        pathname: router.pathname,
        query: {
          ...filters,
          _page: 1,
          title_like: newFilters.search,
        },
      },
      undefined,
      { shallow: true }
    );
  }

  return (
    <Box>
      <Container>
        <Box mb={4} mt={8}>
          <Typography component="h1" variant="h4" fontWeight={"bold"}>
            Works
          </Typography>
        </Box>
        {router.isReady && (
          <WorkFilters
            onSubmit={handleFilterChange}
            initialValues={initialFiltersPayload}
          />
        )}
        <WorkList workList={data?.data || []} loading={isLoading} />
        {totalPages > 0 && (
          <Stack direction={"row"} justifyContent={"center"}>
            <Pagination
              count={totalPages}
              page={Number(filters._page)}
              onChange={handleChangePage}
            />
          </Stack>
        )}
      </Container>
    </Box>
  );
}

WorksPage.Layout = MainLayout;
