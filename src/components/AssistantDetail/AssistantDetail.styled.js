import styled from "@emotion/styled";

export const Wrapper = styled.div(({ theme }) => ({
  padding: theme.spaces.spaceL,
  marginTop: theme.spaces.spaceXXL,
  paddingTop: theme.spaces.spaceXXL,
  marginBottom: theme.spaces.spaceXXL,
}));

export const Picture = styled.picture(({ theme }) => ({
  display: "flex",
  marginBottom: theme.spaces.spaceL,

  img: {
    maxWidth: "100%",
  },
}));

export const Content = styled.div(({ theme }) => ({
  width: "50vw",
  paddingBottom: theme.spaces.spaceL,
}));
