import { fetchBanners, fetchChart } from "@api/chart";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useBanners = () => {
  return useQuery({
    queryKey: ["banners"],
    queryFn: fetchBanners,
    staleTime: 5 * 60 * 1000,
  });
};

export const useChartData = (limit = 10, page = 0) => {
  return useInfiniteQuery({
    queryKey: ["chart", limit, page],
    queryFn: ({ pageParam = 0 }) => fetchChart({ pageParam, limit }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const fetchedTotal = allPages.flatMap((p) => p.resultData.list).length;
      return lastPage.total > fetchedTotal ? lastPage.page + 1 : undefined;
    },
  });
};
