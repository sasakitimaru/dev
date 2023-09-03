import { Meta, StoryObj } from "@storybook/react";
import ArticleCard from "./articlecard";

const meta = {
  title: "Example/ArticleCard",
  component: ArticleCard,
  argTypes: {},
} as Meta<typeof ArticleCard>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
