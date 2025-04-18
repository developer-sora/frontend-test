import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { ChartItemType } from "../../types/chart";
import ChartItem from "./ChartItem";

type ChartProps = {
  chart: ChartItemType[];
  fetchNextPage: () => void;
  hasNextPage: boolean;
};

const Chart = ({ chart, fetchNextPage, hasNextPage }: ChartProps) => {
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
    <div>
      {chart.map((item, index) => {
        const isLast = index === chart.length - 1;
        return (
          <div key={item.targetIdx} ref={isLast ? ref : null}>
            <ChartItem {...item} />
          </div>
        );
      })}
    </div>
  );
};

export default Chart;
