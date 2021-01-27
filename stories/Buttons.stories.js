import React from 'react';

import Button from '../components/Button';
import NavButton from '../components/NavButton';
import Navigation from '../components/Navigation';

export default {
  title: 'Example/Buttons',
  component: Button,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

// const Template = (args) => <Button {...args} />;

export const Primary = () => <Button>Hello</Button>;

export const Nav = () => <NavButton>Hello</NavButton>;

export const Navigati = () => <Navigation />;

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
