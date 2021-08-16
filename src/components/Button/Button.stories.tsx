import React from 'react';
import Button from './Button';

// 
export default {
  title: 'Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  class: 'storybook-button'
};

export const Secondary = Template.bind({});
Secondary.args = {
  class: 'storybook-button--secondary'
};

// Button.stories.js |  Button.stories.jsx | Button.stories.ts | Button.stories.tsx