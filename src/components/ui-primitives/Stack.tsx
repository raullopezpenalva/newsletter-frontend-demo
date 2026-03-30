import React from "react";
import styles from "../../styles/components/ui-primitives/Stack.module.css";

type Gap =  "none" | "xs" | "sm" | "md" | "lg" | "xl";
type Align = "start" | "center" | "end" | "stretch";
type Direction = "row" | "column";
type Margin = "none" | "xs" | "sm" | "md" | "lg" | "xl";
type JustifyContent = "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly";
type FlexGrow = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10";

interface StackProps {
    children: React.ReactNode;
    direction?: Direction;
    gap?: Gap;
    align?: Align;
    as?: React.ElementType;
    className?: string;
    margin?: Margin;
    justifyContent?: JustifyContent;
    flexGrow?: FlexGrow;
}
const Stack: React.FC<StackProps> = ({
    children,
    direction = "column",
    gap = "md",
    align = "stretch",
    as: Component = "div",
    className,
    margin = "none",
    justifyContent = "center",
    flexGrow = "0",
}) => {
    const Comp = Component as React.ElementType;
    return (
        <Comp
            className={[
                styles.stack,
                styles[`gap-${gap}`],
                styles[`align-${align}`],
                styles[`direction-${direction}`],
                styles[`margin-${margin}`],
                styles[`justify-${justifyContent}`],
                styles[`flex-grow-${flexGrow}`],
                className,
            ]
                .filter(Boolean)
                .join(" ")}
        >
            {children}
        </Comp>
    );
}

export default Stack;