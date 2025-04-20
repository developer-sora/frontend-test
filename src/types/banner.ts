export type BannerItem = {
  imgSrc: string;
  title: string;
  date: string;
  url: string;
};

export type BannerResponse = {
  code: number;
  message: string | null;
  resultData: BannerItem[];
};
