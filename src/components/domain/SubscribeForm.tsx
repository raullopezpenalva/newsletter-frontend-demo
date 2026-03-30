import { useState, type FormEvent, type ChangeEvent } from 'react'
import { useSubscribe } from '../../hooks/useSubscribe'
import Button from '../ui-primitives/Button'
import Text from '../ui-primitives/Text'

export default function SubscribeForm() {
  const [email, setEmail] = useState('')
  const [userCreated, setUserCreated] = useState(false)

  const {
    isLoading,
    data,
    error,
    submitSubscription,
    resetState,
  } = useSubscribe()

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault()

    await submitSubscription({
      email,
      userCreated,
    })
  }

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>): void {
    setEmail(event.target.value)

    if (data || error) {
      resetState()
    }
  }

  function handleUserCreatedChange(event: ChangeEvent<HTMLInputElement>): void {
    setUserCreated(event.target.checked)

    if (data || error) {
      resetState()
    }
  }

  return (
    <form className="subscribe-form" onSubmit={handleSubmit}>
      <div className='subscribe-form-email'>
        <label className='subscribe-form-email-label' htmlFor="email">Email address</label>
        <input
            className='subscribe-form-email-input'
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="user@example.com"
          required
        />
      </div>

      <div className='subscribe-form-user-created'>
        <label className='subscribe-form-user-created-label' htmlFor="userCreated">
          <input
            className='subscribe-form-user-created-input'
            id="userCreated"
            name="userCreated"
            type="checkbox"
            checked={userCreated}
            onChange={handleUserCreatedChange}
          />
          User created manually
        </label>
      </div>
      <div className='subscribe-form-submit'>
        <Button className='subscribe-form-button' variant="primary" disabled={isLoading}>
          {isLoading ? 'Submitting...' : 'Submit'}
        </Button>

        {data && (
          <div className='subscribe-form-success'>
            <Text variant="body">
              <strong>Status:</strong> {data.status}
            </Text>
            <Text variant="body">{data.message}</Text>
          </div>
        )}

        {error && (
          <div className='subscribe-form-error'>
            <Text variant="body">
              <strong>Error:</strong> {error.message}
            </Text>

            {error.details && error.details.length > 0 && (
              <ul className='subscribe-form-error-details'>
                {error.details.map((detail) => (
                  <li key={`${detail.field}-${detail.message}`}>
                    {detail.field}: {detail.message}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </form>
  )
}
