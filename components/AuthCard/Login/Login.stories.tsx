import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Login from './Login';
import { Slide } from '../../../store/carousel';

export default {
  title: 'Component/Auth/Login',
  component: Login,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => <Login {...args} />;

export const Default = Template.bind({});
Default.args = {
  set: (slide: Slide) => console.log('set to =>', slide),
};
