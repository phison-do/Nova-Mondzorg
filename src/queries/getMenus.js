import { gql } from "@apollo/client";

export const header = `
  headerMenus: menuItems(where: {location: HCMS_MENU_HEADER}) {
    edges {
      node {
        id
        label
        path
        url
      }
    }
  }
`;

export const GET_MENUS = gql`
  query GET_MENUS {
    ${header}
  }
`;
