import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import DropNav from '.';

export default {
  title: 'Component/DropNav',
  component: DropNav,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof DropNav>;

const Template: ComponentStory<typeof DropNav> = (args) => <DropNav {...args} />;

export const Default = Template.bind({});
