import BannerSwiper from "@components/common/Banner/BannerSwiper";
import Chart from "@components/Chart/Chart";
import Loading from "@components/common/Loading/Loading";
import "./ChartPage.scss";
import { useBanners, useChartData } from "queries/chart.queries";

const limit = 10;
const page = 0;

const ChartPage = () => {
  const { data: banners, isLoading: isBannersLoading } = useBanners();
  const {
    data: chart,
    isLoading: isChartLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useChartData(limit, page);

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
