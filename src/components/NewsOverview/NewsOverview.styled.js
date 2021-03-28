import styled from "@emotion/styled";

export const Wrapper = styled.div(({ theme }) => ({
  marginTop: theme.spaces.spaceXXL,
  marginBottom: theme.spaces.spaceXXL,
}));

export const List = styled.ul(({ theme }) => ({
  margin: 0,
}));

export const ListItem = styled.div(({ theme }) => ({
  width: "25%",

  ":focus": {
    outline: "none",
  },

  img: {
    width: "100%",
  },
}));
