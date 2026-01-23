import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import { Button } from './Button';

// meta = 「Button ストーリーの共通ルール」
const meta = {
  // Storybook の サイドバーの階層名 を決めてる。親階層の名前を変えたり、新しく階層を作れる。
  title: 'Sample/Button',
  // どのコンポーネントか指定
  component: Button,
  // レイアウトの種類 (centered fullscreen padded)
  parameters: {
    layout: 'centered',
  },

  // Props一覧 controls Story一覧がDocsに出る
  tags: ['autodocs'],

  // Props をどう操作できるかを定義
  // カラーピッカーで操作できるようにしてる
  argTypes: {
    backgroundColor: { control: 'color' },
  },

  // 全 Story 共通のデフォルト props
  // どの Story でも onClick を書かなくていい
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

// 以下２行は必須
export default meta;
type Story = StoryObj<typeof meta>;

// 以下は、内部的な処理<Button {...args} />（「基本のボタン」という状態を定義）
//  args: {
//   label: 'Button',
//   size: 'large',
// }

// tsx ファイルへ、<Button label="Button" size="large" />

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

// 変数名 = ストーリー名
export const Secondaryaaa: Story = {
  args: {
    label: 'Button',
    // 追加してみた
    backgroundColor: '#ff0000'
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
