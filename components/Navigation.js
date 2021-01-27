import React from 'react';
import NavButton from './NavButton';
import { Twitter, Home, Explore, Notification, Messages, Bookmark, Lists, Profile, More } from './icons';
import styles from './Navigation.module.css';

function Navigation() {
    return (
        <nav className={styles.nav}>
            <NavButton>
                <Twitter />
            </NavButton>

            <NavButton>
                <Home />
                <span>Home</span>
            </NavButton>

            <NavButton>
                <Explore />
                <span>Explore</span>
            </NavButton>

            <NavButton>
                <Notification />
                <span>Notifications</span>
            </NavButton>

            <NavButton>
                <Messages />
                <span>Messages</span>
            </NavButton>

            <NavButton>
                <Bookmark />
                <span>Bookmarks</span>
            </NavButton>

            <NavButton>
                <Lists />
                <span>Lists</span>
            </NavButton>

            <NavButton>
                <Profile />
                <span>Profiles</span>
            </NavButton>

            <NavButton>
                <More />
                <span>More</span>
            </NavButton>
        </nav>
    )
}

export default Navigation;
