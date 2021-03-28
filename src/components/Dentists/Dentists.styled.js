import styled from "@emotion/styled";

export const Wrapper = styled.div(({ theme }) => ({
  background: theme.colors.beige,
  padding: theme.spaces.spaceXXL,
  marginBottom: theme.spaces.spaceXXL,
  textAlign: "center",

  h2: {
    marginBottom: theme.spaces.spaceL,
  },
}));

export const List = styled.ul(({ theme }) => ({
  display: "flex",
  margin: "0 auto",
  padding: 0,
  listStyle: "none",
  justifyContent: "center",
}));

export const ListItem = styled.div(({ theme }) => ({
  width: "25%",
  margin: "0 10px",

  a: {
    color: theme.colors.black,
    textDecoration: "none",
  },

  h4: {
    fontSize: theme.font.sizes.S,
  },

  picture: {
    display: "block",
    height: "80%",
    marginBottom: theme.spaces.spaceM,
  },

  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
}));

export const ListContent = styled.div(({ theme }) => ({
  padding: theme.spaces.spaceL,

  h3: {
    fontSize: 18,
  },
}));

// export const HeaderContent = styled.div(({ theme }) => ({
//   background: theme.colors.white,
//   padding: 32,
//   position: "absolute",
//   left: 32,
//   width: 320,
//   bottom: 32,

//   [theme.mediaQueries.tablet]: {
//     width: 600,
//   },
// }));
