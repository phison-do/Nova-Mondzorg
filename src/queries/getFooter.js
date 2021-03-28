import { gql } from "@apollo/client";
import MenuFragment from "./fragments/menus";

export const footer = `
  getFooter {
    sidebarOne
  }
  footerMenus: menuItems(where: {location: HCMS_MENU_FOOTER}) {
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

export const GET_FOOTER = gql`
query GET_FOOTER_INFO {
    ${footer}
  }
`;
