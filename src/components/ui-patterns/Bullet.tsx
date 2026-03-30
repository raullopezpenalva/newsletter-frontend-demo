import React from 'react';
import Text from '../ui-primitives/Text';
import styles from '../../styles/components/ui-patterns/BulletList.module.css';

interface BulletListProps {
    children: React.ReactNode;
}

const Bullet: React.FC<BulletListProps> = ({ children }) => {
    return (
        <li className={styles.item}>
            <span className={styles.marker} aria-hidden="true" />
            <Text as="span" className={styles.text}>
                {children}
            </Text>
        </li>
    );
};

export default Bullet;