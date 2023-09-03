import React95Menu from "@/components/react95/React95Menu";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/React95Menu",
  component: React95Menu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof React95Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};
