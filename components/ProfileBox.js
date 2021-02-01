import React from 'react';
import cn from 'classnames';
import styles from './ProfileBox.module.css';
import Button from './Button';
import Photo from './Photo';
import { ArrowBottom } from './icons';
import TextBody from './TextBody';

function ProfileBox({ name = 'Egemen Ceylan', slug = 'egmncyln' }) {
    return (
        <Button className={cn(styles.box)}>
            <Photo />
            <div className={styles.body}>
                <TextBody bold>{name}</TextBody>
                <TextBody className={styles.slug}>@{slug}</TextBody>
            </div>
            <ArrowBottom className={styles.icon} />
        </Button>
    )
}

export default ProfileBox;
