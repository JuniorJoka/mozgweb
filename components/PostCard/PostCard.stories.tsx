import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import PostCard from '.';

export default {
  title: 'Component/Post Card',
  component: PostCard,
} as ComponentMeta<typeof PostCard>;

const Template: ComponentStory<typeof PostCard> = (args) => <PostCard />;

export const Default = Template.bind({});
