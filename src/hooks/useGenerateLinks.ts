import { useState } from "react";
import { generateUnsubscribeLinks } from "../api/newsletterApi";
import type {
  ApiError,
  UnsubscribeLinksResponse,
} from "../types/publicNewsletter";

type UseGenerateLinksReturn = {
  isLoading: boolean;
  data: UnsubscribeLinksResponse | null;
  error: ApiError | null;
  runGenerateLinks: () => Promise<void>;
  resetState: () => void;
};

export function useGenerateLinks(): UseGenerateLinksReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<UnsubscribeLinksResponse | null>(null);
  const [error, setError] = useState<ApiError | null>(null);

  async function runGenerateLinks(): Promise<void> {
    setIsLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await generateUnsubscribeLinks();
      setData(response);
    } catch (err) {
      setError(err as ApiError);
    } finally {
      setIsLoading(false);
    }
  }

  function resetState(): void {
    setIsLoading(false);
    setData(null);
    setError(null);
  }

  return {
    isLoading,
    data,
    error,
    runGenerateLinks,
    resetState,
  };
}
