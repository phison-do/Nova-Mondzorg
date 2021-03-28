import styled from "@emotion/styled";

export const Wrapper = styled.div(({ theme }) => ({
  marginTop: theme.spaces.spaceXXL,
  marginBottom: theme.spaces.spaceXXL,
}));

export const Header = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginBottom: theme.spaces.spaceL,

  h2: {
    margin: `0 ${theme.spaces.spaceL}`,
  },
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

export const Inner = styled.div(({ theme }) => ({
  background: theme.colors.beige,
  marginLeft: theme.spaces.spaceS,
  marginRight: theme.spaces.spaceS,
}));

export const ListContent = styled.div(({ theme }) => ({
  padding: theme.spaces.spaceL,

  h3: {
    fontSize: 18,
  },

  p: {
    maxHeight: 120,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));

export const ListParagraph = styled.div(({ theme }) => ({
  maxHeight: 120,
  overflow: "hidden",
  marginBottom: theme.spaces.spaceL,
}));

export const ArrowButton = styled.button(({ disabled, type }) => ({
  background: "none",
  border: "none",
  padding: 0,
  cursor: "pointer",

  ":focus": {
    outline: "none",
  },

  ...(type === "left" && {
    transform: "rotate(-180deg)",
  }),

  ...(disabled && {
    opacity: 0.4,
  }),
}));

export const Dots = styled.div(({ theme, active }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: theme.spaces.spaceM,
}));

export const DotsList = styled.ul({
  display: "flex",
  listStyle: "none",
});

export const DotsListItem = styled.li(({ theme, active }) => ({
  background: theme.colors.greyblue,
  width: 6,
  height: 6,
  borderRadius: "50%",
  margin: 4,

  ...(active === "true" && {
    background: theme.colors.black,
  }),
}));
