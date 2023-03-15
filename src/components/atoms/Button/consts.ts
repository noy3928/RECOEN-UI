import { theme } from "../../../theme"

export const buttonMode = {
  primary: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    borderColor: theme.colors.primary,
  },
  secondary: {
    backgroundColor: theme.colors.tertiaryBackground,
    color: theme.colors.headingColor,
    borderColor: theme.colors.secondaryBackground,
  },
  outlined: {
    backgroundColor: theme.colors.tertiaryBackground,
    color: theme.colors.warning,
    borderColor: theme.colors.warning,
  },
}

export const buttonSize = {
  small: {
    padding: "0 0.75rem",
    fontSize: "10",
    fontWeight: "REGULAR",
    lineHeight: "2em",
    borderRadius: "0.313rem",
    letterSpacing: "0.03em",
    minHeight: "1.563rem",
  },
  medium: {
    padding: "0.625 2rem",
    fontSize: "12",
    fontWeight: "REGULAR",
    lineHeight: "1.3em",
    borderRadius: "0.625rem",
    minHeight: "2.188rem",
  },
  big: {
    padding: "0.5rem 2rem",
    fontSize: "16",
    fontWeight: "REGULAR",
    lineHeight: "1.6em",
    borderRadius: "0.625rem",
    minHeight: "3.438rem",
  },
}
