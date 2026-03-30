import { useSearchParams } from 'react-router-dom'
import { useConfirmSubscription } from '../hooks/useConfirmSubscription'
import Section from '../components/ui-patterns/Section'
import Text from '../components/ui-primitives/Text'
import SubSection from '../components/ui-patterns/SubSection'


function ConfirmSubscriptionPage() {
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')

  const { isLoading, data, error } = useConfirmSubscription(token)

  return (
    <Section
      id='Subscribe-confirmation-section'
      title="Subscription verification"
      subtitles="Confirm your newsletter subscription"
    >
      <SubSection className="confirmation-result">
        {isLoading && (
          <Text variant="body">Verifying your subscription token...</Text>
        )}

        {!isLoading && data && (
          <>
            <div className='subscribe-confirmation'>
              <Text variant="body">
                <strong>Status:</strong> {data.status}
              </Text>
              <Text variant="body">{data.message}</Text>
              {data.email && (
                <Text variant="body">
                  Subscription confirmed for <strong>{data.email}</strong>.
                </Text>
              )}
            </div>
          </>
        )}

        {!isLoading && error && (
          <>
            <div className='subscribe-confirmation'>
              <Text variant="body">
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
            </div>
          </>
        )}
      </SubSection>
    </Section>
  )
}

export default ConfirmSubscriptionPage