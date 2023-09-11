import { Meta, StoryObj } from "@storybook/react";
import Header from "../components/header";

const meta = {
  title: "Example/Headerobj",
  component: Header,
  argTypes: {},
} as Meta<typeof Header>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
