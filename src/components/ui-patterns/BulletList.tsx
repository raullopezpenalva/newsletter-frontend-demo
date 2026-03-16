import React from 'react';
import Text from '../ui-primitives/Text';
import styles from '../../styles/components/ui-patterns/BulletList.module.css';

type Variant = "dot" | "dash" | "circle" | "check";

interface BulletListProps {
    items?: Array<React.ReactNode>;
    children?: React.ReactNode;
    variant?: Variant;
    className?: string;
    tight?: boolean;
}

const BulletList: React.FC<BulletListProps> = ({
    items,
    children,
    variant = 'dot',
    className,
    tight = false,
}) => {
    const content =
        items?.map((item, index) => (
            <li key={index} className={styles.item}>
                <span className={[styles.marker, styles[`marker-${variant}`]].join(' ')} aria-hidden="true" />
                <Text as="span" className={styles.text}>
                    {item}
                </Text>
            </li>
        )) ?? children;

    return (
        <ul
            className={[
                styles.list,
                styles['variant-${variant}'],
                tight ? styles.tight : '',
                className,
            ]
                .filter(Boolean)
                .join(' ')}
        >
            {content}
        </ul>
    );
};

export default BulletList;