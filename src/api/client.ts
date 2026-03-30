import type { ApiError } from "../types/publicNewsletter";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "/api/v1/";


type RequestOptions = Omit<RequestInit, "body"> & {
    body?: unknown
};

export async function apiRequest<T>(
    endpoint: string,
    options: RequestOptions = {}
): Promise<T> {
    const { body, headers, ...restOptions } = options;

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...restOptions,
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
        body: body ? JSON.stringify(body) : undefined,
    })

    const contentType = response.headers.get('Content-Type');
    const isJsonResponse = contentType?.includes('application/json')

    if (!response.ok) {
        let errorPayload: ApiError

        if (isJsonResponse) {
            errorPayload = await response.json() as ApiError;
        } else {
            errorPayload = {
                timestamp: new Date().toISOString(),
                status: response.status,
                error: response.statusText,
                message: `Request failed with status ${response.status}`,
                path: endpoint,
            }
        }

        throw errorPayload
    }

    if (!isJsonResponse) {
        throw {
            timestamp: new Date().toISOString(),
            status: response.status,
            error: 'Invalid response format',
            message: 'Expected JSON response but received a different content type',
            path: endpoint,
        } as ApiError
    }

    return (await response.json()) as T;
}