import { apiRequest } from "./client";
import type {
  SubscribeRequest,
  SubscribeResponse,
  SubscribeConfirmationResponse,
  UnsubscribeLinksResponse,
} from "../types/publicNewsletter";

export async function subscribeToNewsletter(
  payload: SubscribeRequest,
): Promise<SubscribeResponse> {
  return apiRequest<SubscribeResponse>("/newsletter/subscribe", {
    method: "POST",
    body: payload,
  });
}

export async function confirmSubscription(
  token: string,
): Promise<SubscribeConfirmationResponse> {
  return apiRequest<SubscribeConfirmationResponse>(
    `/newsletter/verify?token=${encodeURIComponent(token)}`,
    {
      method: "POST",
    },
  );
}

export async function generateUnsubscribeLinks(): Promise<UnsubscribeLinksResponse> {
  return apiRequest<UnsubscribeLinksResponse>("/newsletter/generate-unsubscribe-links", {
    method: "GET",
  });
}