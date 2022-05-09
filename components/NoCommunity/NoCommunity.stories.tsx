import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import NoCommunity from '.';

export default {
  title: 'Component/NoCommunity',
  component: NoCommunity,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof NoCommunity>;

const Template: ComponentStory<typeof NoCommunity> = (args) => <NoCommunity />;

export const Default = Template.bind({});
