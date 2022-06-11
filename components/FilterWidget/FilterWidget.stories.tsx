import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import FilterWidget from '.';

export default {
  title: 'Component/Filter Widget',
  component: FilterWidget,
} as ComponentMeta<typeof FilterWidget>;

const Template: ComponentStory<typeof FilterWidget> = () => <FilterWidget />;

export const Default = Template.bind({});
