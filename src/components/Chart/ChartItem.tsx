import { ChartItemType } from "../../types/chart";

const ChartItem = ({
  rank,
  targetName,
  value,
  detail: { artistName },
}: ChartItemType) => {
  return (
    <div>
      <img src="" />
      <div>
        <div>{rank}</div>
      </div>
      <div>
        <div>{targetName}</div>
        <div>{artistName}</div>
      </div>
      <div>{value}</div>
    </div>
  );
};

export default ChartItem;
