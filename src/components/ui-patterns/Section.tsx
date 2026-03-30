import React from "react";

interface SectionProps {
    id?: string;
    title?: string;
    subtitles?: string;
    children: React.ReactNode;
    className?: string;
    justifyContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly";
    flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
}

const Section: React.FC<SectionProps> = ({ id, title, subtitles, children, className, justifyContent = "flex-start", flexDirection = "column" }) => {
    return (
        <section id={id} className={`Section ${className ? className : ""}`}>
            <div className="Section-inner" >
                {(title || subtitles) && (
                    <header className="header">
                        {title && <h2 className="title">{title}</h2>}
                        {subtitles && <p className="subtitle">{subtitles}</p>}
                    </header>
                )}
                <div className="content" style={{ justifyContent: justifyContent, flexDirection: flexDirection }}>
                    {children}
                </div>
            </div>
        </section>
    );
};

export default Section;