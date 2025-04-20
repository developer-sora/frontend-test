import { DefaultBodyType, http, HttpResponse, PathParams } from "msw";
import chartMockData from "./chartMockData.json";
import { ChartResponse } from "@shared-types/chart";
import bannerMockData from "./bannersMockData.json";
import { BannerResponse } from "@shared-types/banner";

interface ChartPrams extends PathParams {
  limit: string;
  page: string;
}

export const handlers = [
  http.get<ChartPrams, DefaultBodyType, ChartResponse>(
    "/api/chart",
    ({ request }) => {
      const url = new URL(request.url);
      const limit = Number(url.searchParams.get("limit") || "10");
      const page = Number(url.searchParams.get("page") || "0");

      const offset = page * limit;

      const paginatedList = chartMockData.slice(offset, offset + limit);

      const responseData: ChartResponse = {
        code: 100,
        message: null,
        resultData: {
          resultDatetime: "집계 기준 (KST) : 2025.04.18 09:50",
          list: paginatedList,
        },
        page: page,
        total: chartMockData.length,
      };

      return HttpResponse.json(responseData);
    }
  ),
  http.get<PathParams, DefaultBodyType, BannerResponse>("/api/banners", () => {
    const responseData: BannerResponse = {
      code: 100,
      message: null,
      resultData: bannerMockData,
    };

    return HttpResponse.json(responseData);
  }),
];
