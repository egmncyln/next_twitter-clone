import React from 'react';

import * as Icons from '../components/icons';
import Photo from '../components/Photo';

export default {
    title: 'Example/Icons',
};

export const Icon = () => (
    <div className="icons">
        <Icons.ArrowBottom />
        <Icons.Bookmark />
        <Icons.BookmarkFill />
        <Icons.Emoji />
        <Icons.Explore />
        <Icons.ExplorerFill />
        <Icons.Gif />
        <Icons.Home />
        <Icons.HomeFill />
        <Icons.Like />
        <Icons.Lists />
        <Icons.ListsFill />
        <Icons.Media />
        <Icons.Messages />
        <Icons.MessagesFill />
        <Icons.More />
        <Icons.Notification />
        <Icons.NotificationFill />
        <Icons.Options />
        <Icons.Profile />
        <Icons.ProfileFill />
        <Icons.Question />
        <Icons.Reply />
        <Icons.Retweet />
        <Icons.Search />
        <Icons.Share />
        <Icons.TimelineProp />
        <Icons.Twitter />
    </div>
)

export const ProfilePhoto = () => <Photo src="https://pbs.twimg.com/profile_images/1159877117091418112/QDzZbZ_7_400x400.jpg" />
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
