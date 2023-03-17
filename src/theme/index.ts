import space from "./config/space"
import sizes from "./config/sizes"
import breakpoints from "./config/breakpoints"
import { fontSizes, fontWeights, lineHeights } from "./config/typography"
import baseColors from "./config/color"

export const theme = {
  breakpoints,
  fontSizes,
  fontWeights,
  lineHeights,
  colors: {
    white: baseColors.white,
    black: baseColors.black,
    primary: baseColors.royalBlue,
    secondary: baseColors.white,
    secondaryBackground: baseColors.gunmetal,
    tertiaryBackground: baseColors.white,
    headingColor: baseColors.deepBlue,
    warning: baseColors.deepRed,
    paragraph: baseColors.gray100,
    success: baseColors.successGreen,
  },
  space,
  sizes,
}
