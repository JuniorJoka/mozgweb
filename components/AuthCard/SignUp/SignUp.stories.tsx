import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SignUp from '.';
import { Slide } from '../../../store/carousel';

export default {
  title: 'Component/Auth/SignUp',
  component: SignUp,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof SignUp>;

const Template: ComponentStory<typeof SignUp> = (args) => <SignUp {...args} />;

export const Default = Template.bind({});
Default.args = {
  set: (slide: Slide) => console.log('set to =>', slide),
};
