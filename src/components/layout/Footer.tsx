import EmailIcon from "../ui-primitives/icons/EmailIcon.tsx";
import GitHubIcon from "../ui-primitives/icons/GitHubIcon.tsx";
import LinkedInIcon from "../ui-primitives/icons/LinkedInIcon.tsx";

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const email = "raullopezpenalva@icloud.com";
    const githubUrl = "https://github.com/raullopezpenalva";
    const linkedinUrl = "https://www.linkedin.com/in/raúl-lópez-penalva/";
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-top">
                    {/* Vertical navigation */}    
                    <nav className="footer-nav">
                        <p className="footer-nav-title">Navigation</p>
                        <a href="/">Home</a>
                        <a href="/docs">Documentation</a>
                        <a href="/admin">Admin</a>
                    </nav>
                    
                    {/* Brand block + tagline */}
                    <div className="footer-brand">
                        <p className="footer-name">Raul Lopez Penalva</p>
                        <p className="footer-tagline">Scalability · DevOps · Infrastructure</p>
                    </div>

                    {/* Social icons */}
                    <div className="footer-social">
                        <p className="footer-social-title">Follow</p>
                        <div className="footer-social-icons">
                            <a
                                href={`mailto:${email}`}
                                aria-label="Send email"
                                className="footer-icon-link"
                            >
                                <EmailIcon />
                            </a>
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="footer-icon-link"
                            >
                                <GitHubIcon />
                            </a>
                            <a
                                href={linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="footer-icon-link"
                            >
                                <LinkedInIcon />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="footer-bottom-copy">
                    <p>© {currentYear} Raúl López Penalva. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
