import React from 'react';
import NavButton from './NavButton';
import { Twitter, Home, Explore, Notification, Messages, Bookmark, Lists, Profile, More } from './icons';
import TitleBold from './TitleBold';
import styles from './Navigation.module.css';

function Navigation({ selectedKey }) {
    return (
        <nav className={styles.nav}>
            <NavButton>
                <Twitter />
            </NavButton>

            <NavButton selected={selectedKey === 'home'}>
                <Home />
                <TitleBold>Home</TitleBold>
            </NavButton>

            <NavButton selected={selectedKey === 'explore'}>
                <Explore />
                <TitleBold>Explore</TitleBold>
            </NavButton>

            <NavButton selected={selectedKey === 'notification'} notify={5}>
                <Notification />
                <TitleBold>Notifications</TitleBold>
            </NavButton>

            <NavButton selected={selectedKey === 'messages'}>
                <Messages />
                <TitleBold>Messages</TitleBold>
            </NavButton>

            <NavButton selected={selectedKey === 'bookmark'}>
                <Bookmark />
                <TitleBold>Bookmarks</TitleBold>
            </NavButton>

            <NavButton selected={selectedKey === 'lists'}>
                <Lists />
                <TitleBold>Lists</TitleBold>
            </NavButton>

            <NavButton selected={selectedKey === 'profile'}>
                <Profile />
                <TitleBold>Profiles</TitleBold>
            </NavButton>

            <NavButton selected={selectedKey === 'more'}>
                <More />
                <TitleBold>More</TitleBold>
            </NavButton>
        </nav>
    )
}

export default Navigation;
