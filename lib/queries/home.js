import { fetchAPI } from "../api";

export async function getHomePage(preview) {
  const data = await fetchAPI(
    `
    query homePage {
      page(id: "cG9zdDoxMw==") {
        title
        content(format: RENDERED)
        homeExtra {
          headerImage {
            mediaItemUrl
          }
        }
      }
    }
  `
  );

  return data?.page;
}
