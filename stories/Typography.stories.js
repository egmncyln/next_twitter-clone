import React from 'react';
import TextTitle from '../components/TextTitle';

export default {
  title: 'Example/Typography',
};

export const Typo = () => (
  <div>
    <TextTitle bold={false}>Hello World</TextTitle>
    <TextTitle>Hello World</TextTitle>
  </div>
);

