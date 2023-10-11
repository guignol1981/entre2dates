import type {Meta, StoryObj} from '@storybook/vue3';
import Button from '../components/Button.vue';

const meta = {
  title: 'Components/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const PropLabel: Story = {
  args: {
    label: 'Button',
  }
};