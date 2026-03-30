import SwaggerViewer from "../components/domain/SwaggerViewer";
import Section from "../components/ui-patterns/Section";

const DocsPage: React.FC = () => {
  return (
    <>
      <Section
        className="API-Documentation"
      >
        <SwaggerViewer />
      </Section>
    
    
    </>
    
  );
};

export default DocsPage;
