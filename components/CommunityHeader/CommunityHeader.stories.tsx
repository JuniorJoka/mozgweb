import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CommunityHeader from '.';

export default {
  title: 'Component/Community Header',
  component: CommunityHeader,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof CommunityHeader>;

const Template: ComponentStory<typeof CommunityHeader> = (args) => <CommunityHeader />;

export const Default = Template.bind({});
