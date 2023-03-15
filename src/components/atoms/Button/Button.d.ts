import { ButtonHTMLAttributes } from "react"

import { buttonMode, buttonSize } from "./consts"

export type ButtonVariant = keyof typeof buttonMode

export type ButtonSize = keyof typeof buttonSize

export interface StyledButtonProps {
  mode?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  isFullWidth?: boolean
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  Omit<StyledButtonProps, "disabled">
