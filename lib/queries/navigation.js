import { fetchAPI } from "../api";

export async function getNavigation() {
  const data = await fetchAPI(
    `
    query navigation {
      menu(id: "dGVybTo4") {
        menuItems {
          edges {
            node {
              label
              path
            }
          }
        }
      }
    }
  `
  );

  return data?.menu;
}
