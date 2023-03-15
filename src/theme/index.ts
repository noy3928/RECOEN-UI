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
    primary: baseColors.deepRed,
    primaryBackground: baseColors.lightGrey,
    secondary: baseColors.midBlue,
    secondaryBackground: baseColors.deepBlue,
    tertiaryBackground: baseColors.white,
    headingColor: baseColors.deepBlue,
    warning: baseColors.deepRed,
    paragraph: baseColors.blackBlue,
    success: baseColors.successGreen,
  },
  space,
  sizes,
}
