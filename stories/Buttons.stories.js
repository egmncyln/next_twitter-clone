import React from 'react';

import Button from '../components/Button';
import NavButton from '../components/NavButton';
import Navigation from '../components/Navigation';
import { Home } from '../components/icons';
import TextTitle from '../components/TextTitle';
import ThemeButton from '../components/ThemeButton';
import Stack from '../components/Stack';

export default {
  title: 'Example/Buttons',
  // component: Button,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

// const Template = (args) => <Button {...args} />;

export const Normal = () => <Button>Hello</Button>;

export const Theme = () => (
  <Stack gap={20}>
    <ThemeButton>Hello</ThemeButton>
    <ThemeButton full>Hello Full</ThemeButton>
    <ThemeButton full big>Hello Full Big</ThemeButton>
  </Stack>
);

export const NavigationButton = () => (
  <NavButton>
    <Home />
    <TextTitle>Home</TextTitle>
  </NavButton>);

export const NavigationFull = () => <Navigation selectedKey="home" />;

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
