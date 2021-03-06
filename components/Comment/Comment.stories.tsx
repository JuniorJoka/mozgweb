import { ComponentMeta, ComponentStory } from '@storybook/react';
import Comment from '.';

export default {
  title: 'Component/Comment',
  component: Comment,
} as ComponentMeta<typeof Comment>;

const Template: ComponentStory<typeof Comment> = (args) => <Comment {...args} />;

export const Default = Template.bind({});
Default.args = {
  username: 'some-username',
  voteCount: 23,
  createdAt: 2,
};
