import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CommentActionBar from '.';

export default {
  title: 'Component/Comment Action Bar',
  component: CommentActionBar,
} as ComponentMeta<typeof CommentActionBar>;

const Template: ComponentStory<typeof CommentActionBar> = (args) => <CommentActionBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  voteCount: 8,
};
