import { useEffect, useState } from "react";
import { unsubscribeFromNewsletter } from "../api/newsletterApi";
import type {
  ApiError,
  UnsubscribeResponse,
} from "../types/publicNewsletter";

type UseUnsubscribeReturn = {
  isLoading: boolean;
  data: UnsubscribeResponse | null;
  error: ApiError | null;
};

export function useUnsubscribe(
  token: string | null,
): UseUnsubscribeReturn {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<UnsubscribeResponse | null>(null);
  const [error, setError] = useState<ApiError | null>(null);

  useEffect(() => {
    async function runUnsubscribe(): Promise<void> {
      if (!token) {
        setError({
          timestamp: new Date().toISOString(),
          status: 400,
          error: "Missing token",
          message: "No unsubscribe token was provided in the URL.",
          path: "/newsletter/unsubscribe",
        });
        setIsLoading(false);
        return;
      }

      try {
        const response = await unsubscribeFromNewsletter({ token });
        setData(response);
      } catch (err) {
        setError(err as ApiError);
      } finally {
        setIsLoading(false);
      }
    }

    runUnsubscribe();
  }, [token]);

  return { isLoading, data, error };
}
