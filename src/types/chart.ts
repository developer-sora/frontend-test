export type ChartDetail = {
  supplyPrice: number;
  salesVolume: number;
  entertainment: string;
  familyCode: string;
  artistIdx: number;
  weight: number;
  saleDate: number;
  albumRelationIdx: number;
  relationIdx: number;
  artistGlobalName: string;
  badge: string;
  branchIdx: number;
  familyState: number;
  artistName: string;
  statusCode: string;
};

export type ChartItemType = {
  genre: number;
  rank: number;
  rankDiff: number;
  targetIdx: string;
  targetImg: string;
  targetName: string;
  value: number;
  isDeadLine: number;
  detail: ChartDetail;
  regDate: string;
};

export type ChartResponse = {
  code: number;
  message: string | null;
  resultData: {
    resultDatetime: string;
    list: ChartItemType[];
  };
  page: number;
  total: number;
};
