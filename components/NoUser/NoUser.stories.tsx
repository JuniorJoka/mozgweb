import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import NoUser from '.';

export default {
  title: 'Component/NoUser',
  component: NoUser,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof NoUser>;

const Template: ComponentStory<typeof NoUser> = (args) => <NoUser />;

export const Default = Template.bind({});
