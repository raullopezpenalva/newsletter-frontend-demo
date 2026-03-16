import React from "react";

interface SubSectionProps {
    id?: string;
    title?: string;
    subtitles?: string;
    children: React.ReactNode;
}

const SubSection: React.FC<SubSectionProps> = ({ id, title, subtitles, children }) => {
    return (
        <section id={id} className="Subsection">
            {(title || subtitles) && (
                <header className="header">
                    {title && <h2 className="title">{title}</h2>}
                    {subtitles && <p className="subtitle">{subtitles}</p>}
                </header>
            )}
            <div className="content">
                {children}
            </div>
        </section>
    );
};

export default SubSection;