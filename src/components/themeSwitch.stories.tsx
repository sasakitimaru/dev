import type { Meta, StoryObj } from "@storybook/react";
import ThemeSwitch from "./themeSwitch";

const meta = {
    title: "Example/ThemeSwitch",
    component: ThemeSwitch,
    argTypes: {
    },
} as Meta<typeof ThemeSwitch>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        Primary: true,
    },
};