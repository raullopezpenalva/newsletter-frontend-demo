import { confirmUnsubscription } from "../api/newsletterApi";
import type {
    ApiError,
    UnsubscribeConfirmationRequest,
    UnsubscribeConfirmationResponse
} from "../types/publicNewsletter";
import { useState } from "react";

type UseUnsubscribeConfirmationReturn = {
    isLoadingConfirmation: boolean;
    dataConfirmation: UnsubscribeConfirmationResponse | null;
    errorConfirmation: ApiError | null;
    submitUnsubscription: (payload: UnsubscribeConfirmationRequest) => Promise<void>;
};

export function useUnsubscribeConfirmation(): UseUnsubscribeConfirmationReturn {
    const [isLoadingConfirmation, setIsLoadingConfirmation] = useState(false);
    const [dataConfirmation, setDataConfirmation] = useState<UnsubscribeConfirmationResponse | null>(null);
    const [errorConfirmation, setErrorConfirmation] = useState<ApiError | null>(null);

    async function submitUnsubscription(payload: UnsubscribeConfirmationRequest): Promise<void> {
        setIsLoadingConfirmation(true);
        setErrorConfirmation(null);
        setDataConfirmation(null);

        try {
            const response = await confirmUnsubscription(payload);
            setDataConfirmation(response);
        } catch (err) {
            setErrorConfirmation(err as ApiError);
        } finally {
            setIsLoadingConfirmation(false);
        }
    }

    return {
        isLoadingConfirmation,
        dataConfirmation,
        errorConfirmation,
        submitUnsubscription,
    };
}
