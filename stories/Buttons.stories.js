import React from 'react';

import Button from '../components/Button';
import NavButton from '../components/NavButton';
import Navigation from '../components/Navigation';
import { Home } from '../components/icons';
import TitleBold from '../components/TitleBold';

export default {
  title: 'Example/Buttons',
  // component: Button,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

// const Template = (args) => <Button {...args} />;

// export const Primary = () => <Button>Hello</Button>;

export const NavigationButton = () => (
  <NavButton>
    <Home />
    <TitleBold>Home</TitleBold>
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
