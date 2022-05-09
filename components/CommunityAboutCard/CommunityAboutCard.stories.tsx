import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CommunityAboutCard from '.';

export default {
  title: 'Component/Community About Card',
  component: CommunityAboutCard,
} as ComponentMeta<typeof CommunityAboutCard>;

const Template: ComponentStory<typeof CommunityAboutCard> = (args) => (
  <CommunityAboutCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  memberCount: '81.4k',
  creationDate: 'Jun 28, 2008',
  buttonLabel: 'Create Post',
  buttonOutlined: true,
  description: 'Community for the open minded',
};
