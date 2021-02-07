import React from 'react';
import cn from 'classnames';
import styles from './Sidebar.module.css';
import Navigation from './Navigation';
import ThemeButton from './ThemeButton';
import ProfileBox from './ProfileBox';
import { Tweet } from '../components/icons';

function Sidebar({ flat }) {
    return (
        <div className={cn(styles.sidebar)}>
            <Navigation flat={flat} />
            <div className={styles.tweet}>
                <ThemeButton big full={!flat}>{flat ? <Tweet /> : "Tweet"}</ThemeButton>
            </div>
            <div className={styles.profile}>
                <ProfileBox flat={flat} />
            </div>
        </div>
    )
}

export default Sidebar;
