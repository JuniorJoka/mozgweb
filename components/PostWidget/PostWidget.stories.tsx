import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import PostWidget from '.';

export default {
  title: 'Component/Post Widget',
  component: PostWidget,
} as ComponentMeta<typeof PostWidget>;

const Template: ComponentStory<typeof PostWidget> = (args) => <PostWidget {...args} />;

export const Default = Template.bind({});
Default.args = {
  textPost: true,
  mediaPost: true,
  linkPost: true,
};
