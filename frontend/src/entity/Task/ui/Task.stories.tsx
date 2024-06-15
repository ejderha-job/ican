import type { Meta, StoryObj } from '@storybook/react';
import { Task } from './Task';
import {Radix} from "../../../stories/decorators/radix";

const meta = {
    title: 'Entity/Task',
    component: Task,
    parameters: {
        layout: 'centered',
    },
    decorators: [Radix]
} satisfies Meta<typeof Task>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        type:"primary"
    },
};

export const Secondary: Story = {
    args: {
        type: "secondary"
    },
};