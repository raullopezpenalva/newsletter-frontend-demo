import ContactForm from "../components/domain/ContactForm";
import Button from "../components/ui-primitives/Button";
import GitHubIconLetter from "../components/ui-primitives/icons/GitHubIconLetter";
import Stack from "../components/ui-primitives/Stack";
import Text from "../components/ui-primitives/Text";

const ContactPage: React.FC = () => {
    return (
        <>
            <div className="contact-layout">
                <div className="contact-inner">

                    <div className="contact-inner-left">

                        <Text variant="title">Questions about the demo?</Text>

                        <Text variant="body">This demo is part of my personal portfolio and showcases a simple newsletter system built around a SPA frontend and backend services.</Text>

                        <Text variant="body">

                            If you have questions about the architecture, API design, service integration or the technologies used in this project, feel free to send a message.</Text>

                        <Text variant="body">

                            I'm always happy to discuss backend development, DevOps and system design.</Text>

                        <Stack direction="row" gap="md" justifyContent="center" align="center" margin="md">
                            <Button variant="alternative" to="https://www.linkedin.com/in/raullopezpenalva/">LinkedIn</Button>
                            <Button variant="secondary" to="https://github.com/raullopezpenalva">
                                <GitHubIconLetter />
                            </Button>
                        </Stack>

                    </div>
                    <div className="contact-inner-right">
                        <div className="contact-form-header">
                            <Text variant="caption">Want to talk?</Text>
                        </div>
                        <div className="contact-form-container">
                            {<ContactForm />}
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default ContactPage;