import { useState } from "react";
import { subscribeToNewsletter } from "../api/newsletterApi";
import type {
  ApiError,
  SubscribeRequest,
  SubscribeResponse,
} from "../types/publicNewsletter";

type UseSubscribeReturn = {
  isLoading: boolean;
  data: SubscribeResponse | null;
  error: ApiError | null;
  submitSubscription: (payload: SubscribeRequest) => Promise<void>;
  resetState: () => void;
};

export function useSubscribe(): UseSubscribeReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<SubscribeResponse | null>(null);
  const [error, setError] = useState<ApiError | null>(null);

  async function submitSubscription(payload: SubscribeRequest): Promise<void> {
    setIsLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await subscribeToNewsletter(payload);
      setData(response);
    } catch (err) {
      setError(err as ApiError);
    } finally {
      setIsLoading(false);
    }
  }

  function resetState(): void {
    setData(null);
    setError(null);
    setIsLoading(false);
  }

  return {
    isLoading,
    data,
    error,
    submitSubscription,
    resetState,
  };
}
