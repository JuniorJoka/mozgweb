import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Layout from '.';

export default {
  title: 'Component/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

const sampleChild = <div>I am a child of this component</div>;

export const Default = Template.bind({});
Default.args = {
  children: sampleChild,
};
