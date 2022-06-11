import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Toast from '.';

export default {
  title: 'Component/Toast',
  component: Toast,
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => <Toast {...args} />;

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  msg: 'Post saved successfully',
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
  msg: 'An error occurred',
};
export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  msg: "Make sure you're sending only strings",
};
