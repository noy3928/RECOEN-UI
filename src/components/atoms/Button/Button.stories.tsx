import React from "react"
import Button from "./Button"
import { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
  title: "Button",
  component: Button,
  argTypes: {
    children: {
      description: "자식 텍스트",
      control: { type: "text" },
    },
    width: {
      description: "너비",
      control: { type: "number" },
    },
  },
} as ComponentMeta<typeof Button>

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = { children: "Button", theme: "primary" }

export const Secondary = Template.bind({})
Secondary.args = { children: "Secondary", theme: "secondary" }

export const Tertiary = Template.bind({})
Tertiary.args = { children: "Tertiary", theme: "tertiary" }

export const CustomizedSize: ComponentStory<typeof Button> = args => (
  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
    <Button {...args} width="10em">
      10em size
    </Button>
    <Button {...args} width="100%">
      Full size
    </Button>
  </div>
)
