import { ChartItemType } from "@shared-types/chart";
import { useState } from "react";

const ChartItem = ({
  targetImg,
  rank,
  targetName,
  value,
  detail: { artistName },
}: ChartItemType) => {
  const [isError, setIsError] = useState(false);
  return (
    <div className="chart-item">
      {isError ? (
        <div className="image-fallback" />
      ) : (
        <img
          src={targetImg}
          onError={() => setIsError(true)}
          className="chart-image"
          alt="차트 이미지"
        />
      )}
      <div className="rank-wrapper">
        <div>{rank}</div>
      </div>
      <div className="name-wrapper">
        <div className="top">{targetName}</div>
        <div className="bottom">{artistName}</div>
      </div>
      <div className="value-wrapper">{value}</div>
    </div>
  );
};

export default ChartItem;
