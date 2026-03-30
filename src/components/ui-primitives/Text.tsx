import React from "react";
import styles from '../../styles/components/ui-primitives/Text.module.css';

type Variant = "body" | "lead" | "muted" | "caption" | "title" | "subtitle" | "parragraph";
type Align = "left" | "center" | "right" | "justify";

interface TextProps {
    children: React.ReactNode;
    as?: React.ElementType;
    variant?: Variant;
    align?: Align;
    className?: string;
}

const Text: React.FC<TextProps> = ({
    children,
    as: Component = 'p',
    variant = 'body',
    align = 'left',
    className,
}) => {
    const renderWithLineBreaks = (text: string) =>
      text.split('\n').map((line, idx, arr) => (
        <React.Fragment key={idx}>
          {line}
          {idx < arr.length - 1 && <br />}
        </React.Fragment>
      ));

    return (
        <Component
            className={[
                styles.text,
                styles[`variant-${variant}`],
                styles[`align-${align}`],
                className,
            ]
                .filter(Boolean)
                .join(' ')}
        >
            {typeof children === 'string' ? renderWithLineBreaks(children) : children}
        </Component>
    );
};

export default Text;