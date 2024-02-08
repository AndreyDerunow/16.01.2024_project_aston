import { Button } from './button';
import { getFavoriteBtnClasses } from '../../utils/getFavoriteBtnClasses';
import type { StoryObj } from '@storybook/react';
import '../../../app/index.css';

const meta = {
    title: 'Button',
    component: Button,
    argTypes: {
        cb: {
            type: 'function',
            description: 'some onClick cb'
        },
        text: {
            type: 'string',
            description: 'button text',
            options: ['favorite!', 'Search', 'toggle Theme', 'Logout'],
            control: { type: 'radio' }
        },
        disabled: {
            type: 'boolean',
            description: 'button available'
        },
        classes: {
            type: 'string',
            description: 'button classes'
        },
        img: {
            type: 'string',
            description: 'button image'
        },
        title: {
            type: 'string',
            description: 'button cb description'
        }
    },
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: 'favorite!',
        classes: getFavoriteBtnClasses(false),
        disabled: false,
        cb: () => {},
        title: ''
    }
};
