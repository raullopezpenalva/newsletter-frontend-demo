import { useGenerateLinks } from '../../hooks/useGenerateLinks'
import Button from '../ui-primitives/Button'
import Text from '../ui-primitives/Text'
import Stack from '../ui-primitives/Stack'
import SubSection from '../ui-patterns/SubSection'

function GeneratedLinksPanel() {
  const {
    isLoading,
    data,
    error,
    runGenerateLinks,
  } = useGenerateLinks()

  async function handleGenerateLinks(): Promise<void> {
    await runGenerateLinks()
  }

  const hasLinks = data && data.count > 0
  const isEmpty = data && data.count === 0

  return (
    <Stack direction="column" gap="md" justifyContent='center' align="center">
      <Button variant="primary" onClick={handleGenerateLinks} disabled={isLoading}>
        {isLoading ? 'Generating...' : 'Generate links'}
      </Button>

      {isLoading && (
        <SubSection>
          <Text variant="subtitle">Generating unsubscribe links for active subscribers...</Text>
        </SubSection>
      )}

      {!isLoading && error && (
        <SubSection>
          <Text variant="subtitle">
            <strong>Error:</strong> {error.message}
          </Text>

          {error.details && error.details.length > 0 && (
            <ul>
              {error.details.map((detail) => (
                <li key={`${detail.field}-${detail.message}`}>
                  {detail.field}: {detail.message}
                </li>
              ))}
            </ul>
          )}
        </SubSection>
      )}

      {!isLoading && isEmpty && (
        <SubSection>
          <Text variant="subtitle">No active subscribers were found.</Text>
        </SubSection>
      )}

      {!isLoading && hasLinks && (
        <Stack gap="sm">
          {data.links.map((item) => (
            <SubSection key={item.email}>
                <Stack direction="column" gap="xs" align="start">
                    <Stack direction="row" gap="xs" align="center">
                        <Text variant="lead">Email: </Text>
                        <Text variant="body">{item.email}</Text>
                    </Stack>
                    <Stack direction="column" gap="none" align="start">
                        <Text variant="lead">Unsubscribe URL: </Text>
                        <Text variant="body">{item.unsubscribeUrl}</Text>
                    </Stack>
                </Stack>
            </SubSection>
          ))}
        </Stack>
      )}
    </Stack>
  )
}

export default GeneratedLinksPanel