import styled from "@emotion/styled";

export const Wrapper = styled.div(({ theme }) => ({
  ...theme.font.roboto,
  backgroundColor: theme.colors.lightGrey,
  padding: theme.spaces.spaceXL,
  fontSize: theme.font.sizes.S,
  textTransform: "uppercase",
  lineHeight: 1.8,

  [theme.mediaQueries.tablet]: {
    display: "flex",
    justifyContent: "space-between",
  },

  h4: {
    fontSize: theme.font.sizes.M,
    color: theme.colors.black,
    margin: "0 0 8px",
    fontWeight: 700,
  },

  a: {
    color: theme.colors.black,
    textDecoration: "none",
    borderBottom: `1px solid ${theme.colors.black}`,
    transition: theme.transitions.fast,

    ":hover": {
      borderColor: "transparent",
    },
  },
}));

export const FooterContent = styled.div(({ theme }) => ({
  display: "flex",

  ul: {
    padding: 0,
    marginLeft: 0,
    marginBottom: theme.spaces.spaceL,
    listStyle: "none",

    ":last-of-type": {
      marginBottom: 0,
    },
  },
}));

export const LinksWrapper = styled.div({
  display: "flex",
});

export const LinksColumn = styled.div(({ theme }) => ({
  marginLeft: theme.spaces.spaceXL,
}));

export const Address = styled.div(({ theme }) => ({
  marginBottom: theme.spaces.spaceL,
  textTransform: "normal",
  h2: {
    fontSize: theme.font.sizes.M,
    color: theme.colors.black,
    margin: "0 0 8px",
    fontWeight: 700,
  },
}));

export const Logo = styled.img(({ theme }) => ({
  width: 281,
  height: 116,
  verticalAlign: "middle",
  transformOrigin: "top left",
  marginBottom: theme.spaces.spaceL,
}));

export const List = styled.ul(({ theme }) => ({
  padding: 20,
  margin: 0,
}));

export const ListItem = styled.li(({ theme }) => ({
  fontFamily: theme.font.roboto,
  fontSize: theme.font.sizes.XS,
  listStyle: "none",
}));

export const CopyRight = styled.div(({ theme }) => ({
  fontSize: 11,
  textAlign: "center",
  padding: 24,
  paddingBottom: 0,

  p: {
    margin: 0,
  },
}));
