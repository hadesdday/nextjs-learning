import { workApi } from "@/api-client";
import { MainLayout } from "@/components/layout";
import { useWorkList } from "@/hooks";
import { ListParams } from "@/models";
import { Button } from "@mui/material";
import * as React from "react";

export interface IWorksPageProps {}

export default function WorksPage(props: IWorksPageProps) {
  const [filters, setFilters] = React.useState<Partial<ListParams>>({
    _page: 1,
    _limit: 10,
  });
  const { data, isLoading } = useWorkList({ params: filters });
  console.log(data);

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
  return (
    <div>
      Works page
      <Button variant="contained" onClick={handleNextPage}>
        next page
      </Button>
    </div>
  );
}

WorksPage.Layout = MainLayout;

export async function getStaticProps() {
  return {
    props: {},
  };
}
