import { useEffect, useState } from "react";
import { confirmSubscription } from "../api/newsletterApi";
import type {
  ApiError,
  SubscribeConfirmationResponse,
} from "../types/publicNewsletter";

type UseConfirmSubscriptionReturn = {
  isLoading: boolean;
  data: SubscribeConfirmationResponse | null;
  error: ApiError | null;
};

export function useConfirmSubscription(
  token: string | null,
): UseConfirmSubscriptionReturn {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<SubscribeConfirmationResponse | null>(null);
  const [error, setError] = useState<ApiError | null>(null);

  useEffect(() => {
    async function runConfirmation(): Promise<void> {
      if (!token) {
        setError({
          timestamp: new Date().toISOString(),
          status: 400,
          error: "Missing token",
          message: "No verification token was provided in the URL.",
          path: "/newsletter/verify",
        });
        setIsLoading(false);
        return;
      }

      try {
        const response = await confirmSubscription(token);
        setData(response);
      } catch (err) {
        setError(err as ApiError);
      } finally {
        setIsLoading(false);
      }
    }

    void runConfirmation();
  }, [token]);

  return {
    isLoading,
    data,
    error,
  };
}
