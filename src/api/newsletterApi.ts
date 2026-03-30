import { apiRequest } from "./client";
import type {
  SubscribeRequest,
  SubscribeResponse,
  SubscribeConfirmationResponse,
  UnsubscribeLinksResponse,
  UnsubscribeRequest,
  UnsubscribeResponse,
  UnsubscribeConfirmationRequest,
  UnsubscribeConfirmationResponse
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

export async function unsubscribeFromNewsletter(
  payload: UnsubscribeRequest,
): Promise<UnsubscribeResponse> {
  return apiRequest<UnsubscribeResponse>("/newsletter/unsubscribe", {
    method: "POST",
    body: payload,
  });
}

export async function confirmUnsubscription(
  payload: UnsubscribeConfirmationRequest,
): Promise<UnsubscribeConfirmationResponse> {
  return apiRequest<UnsubscribeConfirmationResponse>("/newsletter/confirm-unsubscription", {
    method: "POST",
    body: payload,
  });
}
