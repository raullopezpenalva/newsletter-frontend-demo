import GeneratedLinksPanel from "../components/domain/GeneratedLinksPanel";
import SubscribeForm from "../components/domain/SubscribeForm";
import Bullet from "../components/ui-patterns/Bullet";
import BulletList from "../components/ui-patterns/BulletList";
import Section from "../components/ui-patterns/Section";
import { Button } from "../components/ui-primitives/Button";
import Stack from "../components/ui-primitives/Stack";
import Text from "../components/ui-primitives/Text";

const HomePage: React.FC = () => {
  return (
    <>
      {/* HERO */}
      <Section
        id="hero"
        className="hero-section"
        justifyContent="center"
      >
        <div className="hero-inner">
          <Stack gap="sm"
            align="center"
            direction="column"
            justifyContent="center"
          >
            <Text variant="title">
              Newsletter Service Demo
            </Text>
            <Text variant="subtitle">
              Explore how subscription, verification and unsubscribe flows work through a real backend API.
            </Text>
            <Text variant="body">
              This demo frontend interacts with the `newsletter-service` backend, a Spring Boot microservice designed to manage newsletter subscriptions with token-based verification and unsubscribe mechanisms.
            </Text>
            <Button variant="primary" to="/docs">
              View Documentation
            </Button>
          </Stack>
        </div>
      </Section>
      <Section
        id="SubscribeFlow"
        title="Try the subscription flow"
        subtitles="Submit an email address and observe how the backend processes the request"
      >
        <Stack
          direction="column"
          gap="sm"
          align="stretch"
          justifyContent="center"
        >
          <Stack direction="column" gap="none" align="start">
            <Text variant="body">
              This form sends a subscription request to the newsletter backend service.
              Depending on the provided parameters, the system will either create a new subscription or trigger the email verification process.
            </Text>
            <Text variant="body">How the flow works:</Text>
            <BulletList>
              <Bullet>The email field represents the subscriber address.</Bullet>
              <Bullet>The `userCreated` flag simulates whether the subscription was created directly by the system (for example during user registration).</Bullet>
              <Bullet>If `userCreated` is false, the system sends a verification email containing a confirmation link.</Bullet>
              <Bullet>If `userCreated` is true, the subscription is immediately confirmed without requiring email verification.</Bullet>
            </BulletList>
            <Text variant="body">Possible responses:</Text>
            <BulletList>
              <Bullet>Verification email sent. The subscription was created but requires confirmation via email. Use MailDev to use the confirmation link.</Bullet>
              <Bullet>Subscribed. The subscription was immediately activated (userCreated = true).</Bullet>
              <Bullet>Already subscribed. The email address is already subscribed to the newsletter.</Bullet>
            </BulletList>
          </Stack>
          <div className="home-subscribe-form">
            <SubscribeForm />
          </div>
        </Stack>
      </Section>
      <Section
        id="UnsubscribeLinksGenerationFlow"
        title="Unsubscribe links generation flow"
        subtitles="Generate personalized unsubscribe links for all active subscribers"
      >
        <Stack direction="column" gap="xs" align="center" justifyContent="center">
          <Text variant="body">
            This feature demonstrates a common backend use case in email marketing systems.
            An external service (such as a newsletter sender or campaign tool) can request a list of all active subscribers. The backend then generates a unique unsubscribe link for each email address and returns them as a structured response.
            These links can be embedded into outgoing emails, allowing each recipient to unsubscribe securely with a single click. This ensures compliance with email best practices while keeping the unsubscribe process simple and reliable for users.
          </Text>
          <Text variant="body">This flow simulates how email platforms generate unsubscribe links before sending campaigns.</Text>
          <GeneratedLinksPanel />
        </Stack>
        
      </Section>
            



    </>
  );
};

export default HomePage;