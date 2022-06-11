import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import HeaderOptionsMenu from '.';

export default {
  title: 'Component/Header Options Menu',
  component: HeaderOptionsMenu,
} as ComponentMeta<typeof HeaderOptionsMenu>;

const Template: ComponentStory<typeof HeaderOptionsMenu> = (args) => <HeaderOptionsMenu />;

export const Default = Template.bind({});
