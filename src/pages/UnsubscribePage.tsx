import { useSearchParams } from 'react-router-dom'
import { useUnsubscribe } from '../hooks/useUnsubscribe';
import Section from '../components/ui-patterns/Section';
import SubSection from '../components/ui-patterns/SubSection';
import Text from '../components/ui-primitives/Text';
import Button from '../components/ui-primitives/Button';



function UnsubscribePage() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const { isLoading, data, error } = useUnsubscribe(token);

  return (
    <Section
      id='unsubscribe-confirmation-section'
      title="Unsubscribe from newsletter"
      subtitles="Confirm your unsubscription request"
    >
      <SubSection className="confirmation-result">
        {isLoading && (
          <Text variant="body">Processing your unsubscription request...</Text>
        )}

        {!isLoading && data && (
          <>
            <div className='unsubscribe-confirmation'>
              <Text variant="body">
                <strong>Email:</strong> {data.email}
              </Text>
              {data.email && (
                <Button variant="primary" to="/">Confirm</Button>
              )}
            </div>
          </>
        )}

        {!isLoading && error && (
          <>
            <div className='unsubscribe-confirmation'>
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
  );
}

export default UnsubscribePage;