import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Card from '.';

export default {
  title: 'Component/Card',
  Component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title:
    'Got offered 25$ an hour as an Automation Control Intern. Is that a competitive offer in Los Angeles, CA as a Masters student?',
  community: 'learnpython',
  voteCount: 10,
  commentCount: 2,
  time: '2h',
  author: 'John',
};
