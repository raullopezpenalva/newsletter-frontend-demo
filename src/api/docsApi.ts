export type OpenApiSpec = Record<string, unknown>;

const OPENAPI_SPEC_URL = import.meta.env.VITE_OPENAPI_SPEC_URL;

if (!OPENAPI_SPEC_URL) {
  throw new Error("VITE_OPENAPI_SPEC_URL is not defined");
}

export async function fetchOpenApiSpec(): Promise<OpenApiSpec> {
  const response = await fetch(OPENAPI_SPEC_URL, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch OpenAPI spec: ${response.status}`);
  }

  return (await response.json()) as OpenApiSpec;
}
