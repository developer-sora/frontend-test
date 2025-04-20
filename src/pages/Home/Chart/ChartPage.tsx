import BannerSwiper from "@components/common/Banner/BannerSwiper";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import Chart from "@components/Chart/Chart";
import { fetchBanners, fetchChart } from "@api/chart";
import Loading from "@components/common/Loading/Loading";
import "./ChartPage.scss";

const limit = 10;
const page = 0;

const ChartPage = () => {
  const { data: banners, isLoading: isBannersLoading } = useQuery({
    queryKey: ["banners"],
    queryFn: fetchBanners,
    staleTime: 5 * 60 * 1000,
  });

  const {
    data: chart,
    isLoading: isChartLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["chart", limit, page],
    queryFn: ({ pageParam = 0 }) => fetchChart({ pageParam, limit }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const fetchedTotal = allPages.flatMap((p) => p.resultData.list).length;
      return lastPage.total > fetchedTotal ? lastPage.page + 1 : undefined;
    },
  });

  if (!chart?.pages[0].resultData.list) {
    return null;
  }

  if (isBannersLoading || isChartLoading) {
    return <Loading />;
  }

  return (
    <div className="chart-page">
      {banners?.resultData && <BannerSwiper banners={banners.resultData} />}
      <Chart
        chart={chart.pages.flatMap((page) => page.resultData.list)}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
    </div>
  );
};

export default ChartPage;
