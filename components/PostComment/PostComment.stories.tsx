import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import PostComment from '.';

export default {
  title: 'Component/Post Comment',
  component: PostComment,
} as ComponentMeta<typeof PostComment>;

const Template: ComponentStory<typeof PostComment> = (args) => <PostComment {...args} />;

export const Default = Template.bind({});
// Default.args = {
//   user: {
//     username: 'some_random_user',
//   },
// };
