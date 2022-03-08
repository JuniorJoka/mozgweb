import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Button from '.';

export default {
  title: 'Component/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Sign up',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Log in',
  outlined: true,
};

export const Extended = Template.bind({});
Extended.args = {
  label: 'full-width button',
  extended: true,
};

export const ColoredOutline = Template.bind({});
ColoredOutline.args = {
  label: 'colored-outline',
  coloredOutline: true,
  outlined: true,
};
