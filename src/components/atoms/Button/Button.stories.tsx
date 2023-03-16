import React from "react"
import Button from "./Button"
import { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = { children: "Button", theme: "primary" }

export const Secondary = Template.bind({})
Secondary.args = { children: "Secondary", theme: "secondary" }

export const Tertiary = Template.bind({})
Tertiary.args = { children: "Tertiary", theme: "tertiary" }
