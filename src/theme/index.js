const breakpoints = {
  small: 320,
  medium: 768,
  large: 1024,
  xlarge: 1200,
};

const mediaQueries = {
  mobile: `@media screen and (min-width: ${breakpoints.small}px)`,
  tablet: `@media screen and (min-width: ${breakpoints.medium}px)`,
  large: `@media screen and (min-width: ${breakpoints.large}px)`,
  xlarge: `@media screen and (min-width: ${breakpoints.xlarge}px)`,
};

const transitions = {
  fast: "all 200ms ease",
  medium: "all 400ms ease",
};

const colors = {
  lightGrey: "#f5f5f5",
  black: "#131313",
  white: "#ffffff",
  bermuda: "#97cfc1",
  green: "#a9c1b8",
  greyblue: "#d5e5e7",
  beige: "#f7f6f2",
};

const spaces = {
  spaceS: "16px",
  spaceM: "24px",
  spaceL: "32px",
  spaceXL: "48px",
  spaceXXL: "64px",
};

const font = {
  base: {
    fontFamily: "'Hind Madurai', sans-serif",
    fontWeight: "normal",
    lineHeight: 1.5,
  },
  title: {
    fontFamily: "'Hind Madurai', sans-serif",
    lineHeight: 1.5,
  },
  roboto: {
    fontFamily: "'Roboto', sans-serif",
  },
  sizes: {
    XS: "12px",
    S: "14px",
    M: "16px",
    L: "24px",
    XL: "32px",
  },
};

export const theme = {
  colors,
  spaces,
  font,
  mediaQueries,
  transitions,
};
