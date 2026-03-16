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
                    {/* Navegación vertical */}    
                    <nav className="footer-nav">
                        <p className="footer-nav-title">Navegación</p>
                        <a href="/">Inicio</a>
                        <a href="/about">Sobre mí</a>
                        <a href="/services">Servicios</a>
                        <a href="/projects">Proyectos</a>
                        <a href="/blog">Blog</a>
                        <a href="/contact">Contacto</a>
                    </nav>
                    
                    {/* Bloque marca + tagline */}
                    <div className="footer-brand">
                        <p className="footer-name">Raul Lopez Penalva</p>
                        <p className="footer-tagline">Escalabilidad · DevOps · Infraestructura</p>
                    </div>

                    {/* Iconos sociales */}
                    <div className="footer-social">
                        <p className="footer-social-title">Sígueme</p>
                        <div className="footer-social-icons">
                            <a
                                href={`mailto:${email}`}
                                arial-label="Enviar email"
                                className="footer-icon-link"
                            >
                                <EmailIcon />
                            </a>
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                arial-label="GitHub"
                                className="footer-icon-link"
                            >
                                <GitHubIcon />
                            </a>
                            <a
                                href={linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                arial-label="LinkedIn"
                                className="footer-icon-link"
                            >
                                <LinkedInIcon />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Derechos de autor */}
                <div className="footer-bottom-copy">
                    <p>© {currentYear} Raúl López Penalva. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
