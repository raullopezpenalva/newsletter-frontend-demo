import { useEffect, useState } from 'react'
import SwaggerUI from 'swagger-ui-react'
import 'swagger-ui-react/swagger-ui.css'

import { fetchOpenApiSpec, type OpenApiSpec } from '../../api/docsApi'
import Text from '../ui-primitives/Text'
import SubSection from '../ui-patterns/SubSection'

function SwaggerViewer() {
  const [spec, setSpec] = useState<OpenApiSpec | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadSpec(): Promise<void> {
      try {
        setIsLoading(true)
        setError(null)

        const openApiSpec = await fetchOpenApiSpec()
        setSpec(openApiSpec)
      } catch (err) {
        const message =
          err instanceof Error
            ? err.message
            : 'Failed to load OpenAPI documentation.'

        setError(message)
      } finally {
        setIsLoading(false)
      }
    }

    void loadSpec()
  }, [])

  if (isLoading) {
    return (
      <SubSection
        title="API Documentation"
        subtitles="Explore the API endpoints and their details."
      >
        <Text as="p">Loading API documentation...</Text>
      </SubSection>
    )
  }

  if (error) {
    return (
      <SubSection
        title="API Documentation"
        subtitles="Explore the API endpoints and their details."
      >
        <Text as="p">
          <strong>Error:</strong> {error}
        </Text>
      </SubSection>
    )
  }

  if (!spec) {
    return (
      <SubSection
        title="API Documentation"
        subtitles="Explore the API endpoints and their details."
      >
        <Text as="p">No OpenAPI specification is available.</Text>
      </SubSection>
    )
  }

  return <SwaggerUI spec={spec} />
}

export default SwaggerViewer