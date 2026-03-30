import Bullet from "../components/ui-patterns/Bullet";
import BulletList from "../components/ui-patterns/BulletList";
import Section from "../components/ui-patterns/Section";
import Stack from "../components/ui-primitives/Stack";
import Text from "../components/ui-primitives/Text";

const AdminPage: React.FC = () => {
  return (
    <>
      <Section
        id="admin-overview"
        title="Overview"
      >
        <Stack direction="column" justifyContent="flex-start" align="start" gap="xs">
          <Text variant="body">The admin API exposes a set of endpoints designed to manage and inspect newsletter subscribers at a system level.</Text>
          <Text variant="body">These endpoints allow developers or operators to:</Text>
          <BulletList>
            <Bullet>retrieve subscribers based on their status</Bullet>
            <Bullet>inspect individual subscriber records</Bullet>
            <Bullet>update subscriber state and internal notes</Bullet>
          </BulletList>
          <Text variant="title">Available Endpoints</Text>
          <Text variant="lead">1. Get subscribers by status (paginated)</Text>
          <Text variant="muted">GET /api/v1/newsletter/admin/subscribers</Text>
          <Text variant="body">Retrieves a paginated list of subscribers filtered by status.</Text>
          <Text variant="caption">Query parameters:</Text>
          <BulletList>
            <Bullet><strong>status</strong>subscriber status (e.g. ACTIVE, PENDING, UNSUBSCRIBED) </Bullet>
            <Bullet><strong>page</strong> page number (starting from 0)</Bullet>
            <Bullet><strong>size</strong> number of elements per page</Bullet>
          </BulletList>
          <Text variant="caption">Behavior:</Text>
          <BulletList>
            <Bullet>Returns a paginated response following the Spring Boot Page&lt;T&gt; structure</Bullet>
            <Bullet>The actual data is contained in the <strong>content</strong> field</Bullet>
            <Bullet>pagination metadata is included (totalElements, totalPages, etc.)</Bullet>
          </BulletList>
          <Text variant="lead">2. Get subscriber by ID</Text>
          <Text variant="muted">GET /api/v1/newsletter/admin/subscribers/id</Text>
          <Text variant="body">Retrieves a single subscriber by their unique ID.</Text>
          <Text variant="caption">Path parameters:</Text>
          <BulletList>
            <Bullet><strong>id</strong> the unique identifier of the subscriber</Bullet>
          </BulletList>
          <Text variant="lead">3. Update subscriber (admin operation)</Text>
          <Text variant="muted">PATCH /api/v1/newsletter/admin/subscribers/id/status</Text>
          <Text variant="body">Updates the status of a subscriber or adds internal notes.</Text>
          <Text variant="caption">Path parameters:</Text>
          <BulletList>
            <Bullet><strong>id</strong> the unique identifier of the subscriber</Bullet>
          </BulletList>
          <Text variant="caption">Request body (JSON):</Text>
          <BulletList>
            <Bullet><strong>status</strong> (optional) new status for the subscriber (e.g. ACTIVE, PENDING, UNSUBSCRIBED)</Bullet>
            <Bullet><strong>adminNotes</strong> (optional) free-form text notes for internal use</Bullet>
          </BulletList>
          <Text variant="caption">Behavior:</Text>
          <BulletList>
            <Bullet>Modifies the subscriber status</Bullet>
            <Bullet>Admin notes are stored for internal reference and do not affect subscriber behavior</Bullet>
            <Bullet>Intended for system-level operations and manual interventions</Bullet>
          </BulletList>
          <Text variant="title">Notes</Text>
          <BulletList>
            <Bullet>These endpoints are intended for administrative usage</Bullet>
            <Bullet>No authentication is currently enforced in this demo environment</Bullet>
            <Bullet>In a production scenario, these endpoints should be protected</Bullet>
          </BulletList>
        </Stack>
      </Section>
    </>
  );
};

export default AdminPage;