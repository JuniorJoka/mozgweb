import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Header from '.';

export default {
  title: 'Component/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const LoggedOut = Template.bind({});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    username: 'joka',
    id: 'some-user-id',
    email: 'some-email@mail.com',
  },
};
