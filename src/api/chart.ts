import { BannerResponse } from "@shared-types/banner";
import { ChartResponse } from "@shared-types/chart";

export const fetchBanners = async (): Promise<BannerResponse> => {
  const response = await fetch("/api/banners");
  if (!response.ok) {
    throw new Error("Failed to fetch banners");
  }
  return await response.json();
};

export const fetchChart = async ({
  pageParam = 0,
  limit,
}: {
  pageParam: number;
  limit: number;
}): Promise<ChartResponse> => {
  const response = await fetch(`/api/chart?limit=${limit}&page=${pageParam}`);
  if (!response.ok) {
    throw new Error("Failed to fetch chart data");
  }
  return await response.json();
};
