import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import { SelectBox } from './SelectBox';

// meta = 「SelectBox ストーリーの共通ルール」
const meta = {
  title: 'Sample/SelectBox',
  component: SelectBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    value: {
      control: 'select',
      options: ['apple', 'banana', 'orange'],
    },
  },

  // 全 Story 共通のデフォルト props
  args: {
    label: 'Fruit',
    options: [
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Orange', value: 'orange' },
    ],
    onChange: fn(),
  },
} satisfies Meta<typeof SelectBox>;

export default meta;
type Story = StoryObj<typeof meta>;


// --------------------
// Stories
// --------------------

export const Default: Story = {
  args: {
    value: 'apple',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'apple',
  },
};

export const BananaSelected: Story = {
  args: {
    value: 'banana',
  },
};

export const WithoutLabel: Story = {
  args: {
    label: undefined,
    value: 'orange',
  },
};
