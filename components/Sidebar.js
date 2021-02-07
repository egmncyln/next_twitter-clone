import React from 'react';
import cn from 'classnames';
import styles from './Sidebar.module.css';
import Nagitation from './Navigation';
import ThemeButton from './ThemeButton';
import ProfileBox from './ProfileBox';

function Sidebar({ flat }) {
    return (
        <div className={cn(styles.sidebar)}>
            <Nagitation flat={flat} />
            <ThemeButton big full>Tweet</ThemeButton>
            <ProfileBox />
        </div>
    )
}

export default Sidebar;
