import styled from "@emotion/styled";

export const Wrapper = styled.div(({ theme }) => ({
  marginBottom: theme.spaces.spaceL,

  [theme.mediaQueries.tablet]: {
    overflow: "hidden",
    height: "85vh",
    position: "relative",
  },
}));

export const Hero = styled.div(({ theme }) => ({
  width: "100%",
  position: "absolute",
}));

export const HeaderContent = styled.div(({ theme }) => ({
  background: theme.colors.white,
  padding: 32,
  position: "absolute",
  left: 32,
  width: 320,
  bottom: 32,

  [theme.mediaQueries.tablet]: {
    width: 600,
  },
}));
