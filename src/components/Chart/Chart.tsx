import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { ChartItemType } from "@shared-types/chart";
import Loading from "@components/common/Loading/Loading";
import ChartItem from "./ChartItem";
import "./Chart.scss";

interface ChartProps {
  chart: ChartItemType[];
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
}

const Chart = ({
  chart,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
}: ChartProps) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    rootMargin: "100px",
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView, hasNextPage]);

  return (
    <div className="chart-list">
      <div>차트</div>
      {chart.map((item, index) => {
        const isLast = index === chart.length - 1;
        return (
          <div key={item.targetIdx} ref={isLast ? ref : null}>
            <ChartItem {...item} />
          </div>
        );
      })}
      {isFetchingNextPage && <Loading />}
    </div>
  );
};

export default Chart;
