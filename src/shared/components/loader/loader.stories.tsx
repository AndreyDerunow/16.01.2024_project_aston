import { Loader } from './loader';
import type { Meta, StoryObj } from '@storybook/react';
import '../../../app/index.css';

const meta = {
    title: 'Loader',
    component: Loader,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof Loader>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
