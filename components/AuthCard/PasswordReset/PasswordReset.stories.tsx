import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import PasswordReset from '.';
import { Slide } from '../../../store/carousel';

export default {
  title: 'Component/Auth/PasswordReset',
  component: PasswordReset,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof PasswordReset>;

const Template: ComponentStory<typeof PasswordReset> = (args) => <PasswordReset {...args} />;

export const Default = Template.bind({});
Default.args = {
  set: (slide: Slide) => console.log('set to =>', slide),
};
