import styled from "@emotion/styled";

export const Wrapper = styled.div(({ theme }) => ({
  position: "relative",
  zIndex: 100,
}));

export const LogoWrapper = styled.div(({ theme }) => ({
  position: "absolute",
  left: 32,
  top: 32,
}));

export const Logo = styled.img(({ theme }) => ({
  width: "281px",
  height: "116px",
  verticalAlign: "middle",
  transform: "scale(0.6)",
  transformOrigin: "top left",
}));

export const List = styled.ul(({ theme }) => ({
  display: "flex",
  padding: 20,
  margin: 0,
}));

export const Nav = styled.nav(({ theme }) => ({
  background: theme.colors.white,
  fontSize: 14,
  textTransform: "uppercase",
  position: "fixed",
  top: 20,
  right: 32,
  cursor: "pointer",
  userSelect: "none",
  padding: 6,
  borderRadius: 2,
}));

export const ListItem = styled.li(({ theme, active }) => ({
  fontFamily: theme.font.roboto,
  listStyle: "none",
  margin: "0 16px",

  a: {
    color: theme.colors.black,
    textDecoration: "none",
    fontWeight: 500,
    padding: 4,
    borderBottom: active
      ? `2px solid ${theme.colors.black}`
      : "2px solid transparent",

    ":hover": {
      borderColor: theme.colors.black,
      transition: "border ease 200ms",
    },
  },
}));
