import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { fn } from '@storybook/test';

import { AButton } from '@arch-design/arch-ui';

type Story = StoryObj<typeof AButton> & { argTypes: ArgTypes };

const meta: Meta<typeof AButton> = {
  title: 'Example/Button',
  component: AButton,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'danger', 'info', ''],
    },
    size: {
      control: { type: 'select' },
      options: ['large', 'default', 'small', ''],
    },
    plain: {
      control: 'boolean',
    },
    circle: {
      control: 'boolean',
    },
    round: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    useThrottle: {
      control: 'boolean',
    },
    throttleDuration: {
      control: 'number',
    },
    autofocus: {
      control: 'boolean',
    },
    tag: {
      control: { type: 'select' },
      options: ['button', 'a', 'div'],
    },
    nativeType: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset', ''],
    },
    icon: {
      control: { type: 'text' },
    },
    loadingIcon: {
      control: { type: 'text' },
    },
  },
  args: { onClick: fn() },
};

const container = (val: string) => `
<div style="margin:5px">
  ${val}
</div>
`;

export const Default: Story & { args: { content: string } } = {
  argTypes: {
    content: {
      control: { type: 'text' },
    },
  },
  args: {
    type: 'primary',
    content: 'Button',
  },
  render: (args: any) => ({
    components: { AButton },
    setup() {
      return { args };
    },
    template: container(
      `<a-button data-testid="story-test-btn" v-bind="args">{{args.content}}</a-button>`
    ),
  }),
};

export default meta;