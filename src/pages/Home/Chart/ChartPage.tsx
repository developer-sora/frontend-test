import Layout from "../../../components/common/Layout/Layout";
import BannerSwiper from "../../../components/common/Banner/BannerSwiper";
import { useInfiniteQuery } from "@tanstack/react-query";
import { ChartResponse } from "../../../types/chart";
import Chart from "../../../components/Chart/Chart";

const limit = 10; // limit 값 예시
const page = 1; // 현재 페이지

const ChartPage = () => {
  const {
    status,
    data: chart,
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["chart", limit, page],
    queryFn: async ({ pageParam = 0 }): Promise<ChartResponse> => {
      const response = await fetch(
        `/api/chart?limit=${limit}&page=${pageParam}`
      );
      return await response.json();
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const fetchedTotal = allPages.flatMap((p) => p.resultData.list).length;
      return lastPage.total > fetchedTotal ? lastPage.page + 1 : undefined;
    },
  });

  if (!chart?.pages[0].resultData.list) {
    return null;
  }
  return (
    <>
      <BannerSwiper />
      <Chart
        chart={chart.pages.flatMap((page) => page.resultData.list)}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
      />
    </>
  );
};

export default ChartPage;
