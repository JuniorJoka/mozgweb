import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CommentHeaderBar from '.';

export default {
  title: 'Component/Comment Header Bar',
  component: CommentHeaderBar,
} as ComponentMeta<typeof CommentHeaderBar>;

const Template: ComponentStory<typeof CommentHeaderBar> = (args) => <CommentHeaderBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  username: 'some-username',
  createdAt: 2,
};
