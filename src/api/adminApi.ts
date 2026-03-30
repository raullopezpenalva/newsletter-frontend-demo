import { apiRequest } from "./client";
import type { PageResponse } from "../types/api";
import type { GetAllByStatusResponse } from "../types/adminNewsletter";

export async function fetchAdminSubscribers(
    status: string,
    page = {$page: 0},
    size = {$size: 10},
): Promise<PageResponse<GetAllByStatusResponse>> {
  return apiRequest<PageResponse<GetAllByStatusResponse>>(
    `/admin/newsletter/subscribers?status=${status}&page=${page}&size=${size}`,
    {
      method: "GET",
    },
  );
}
