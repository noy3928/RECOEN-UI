const breakpoints = [0, "41.75rem", "64rem", "90rem"] // 670px, 1024px, 1440px

export default breakpoints

export const mediaQueries = {
  MOBILE: `@media screen and (min-width: ${breakpoints[0]})`,
  TABLET: `@media screen and (min-width: ${breakpoints[1]})`,
  DESKTOP: `@media screen and (min-width: ${breakpoints[2]})`,
  DESKTOP_LARGE: `@media screen and (min-width: ${breakpoints[3]})`,
}
