import React from 'react';

import Button from '../components/Button';

export default {
  title: 'Example/Buttons',
  component: Button,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

// const Template = (args) => <Button {...args} />;

export const Normal = () => <Button>Merhaba</Button>;

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