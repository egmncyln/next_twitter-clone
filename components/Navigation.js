import React from 'react';
import NavButton from './NavButton';
import { Twitter, Home, Explore, Notification, Messages, Bookmark, Lists, Profile, More } from './icons';
import TextTitle from './TextTitle';
import styles from './Navigation.module.css';

function Navigation({ selectedKey }) {
    return (
        <nav className={styles.nav}>
            <NavButton>
                <Twitter />
            </NavButton>

            <NavButton selected={selectedKey === 'home'}>
                <Home />
                <TextTitle>Home</TextTitle>
            </NavButton>

            <NavButton selected={selectedKey === 'explore'}>
                <Explore />
                <TextTitle>Explore</TextTitle>
            </NavButton>

            <NavButton selected={selectedKey === 'notification'} notify={5}>
                <Notification />
                <TextTitle>Notifications</TextTitle>
            </NavButton>

            <NavButton selected={selectedKey === 'messages'}>
                <Messages />
                <TextTitle>Messages</TextTitle>
            </NavButton>

            <NavButton selected={selectedKey === 'bookmark'}>
                <Bookmark />
                <TextTitle>Bookmarks</TextTitle>
            </NavButton>

            <NavButton selected={selectedKey === 'lists'}>
                <Lists />
                <TextTitle>Lists</TextTitle>
            </NavButton>

            <NavButton selected={selectedKey === 'profile'}>
                <Profile />
                <TextTitle>Profiles</TextTitle>
            </NavButton>

            <NavButton selected={selectedKey === 'more'}>
                <More />
                <TextTitle>More</TextTitle>
            </NavButton>
        </nav>
    )
}

export default Navigation;
