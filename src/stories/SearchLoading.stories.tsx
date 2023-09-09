import { Meta, StoryObj } from "@storybook/react";
import loading from "@/app/search/loading";

const meta = {
  title: "Example/SearchLoading",
  component: loading,
  argTypes: {},
} as Meta<typeof loading>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
