import { header } from "./getMenus";
import { footer } from "./getFooter";
import { newsPosts } from "./getNewsPosts";
import { fetchAPI } from "@/src/apollo/fetchApi";

export async function getHomePage(slug) {
  const data = await fetchAPI(
    `
    query homepage($id: ID!, $idType: PageIdType!) {
      page(id: $id, idType: $idType) {
        title(format: RENDERED)
        content(format: RENDERED)
        slug
        uri
        featuredImage {
          node {
            altText
            mediaItemUrl
          }
        } 
      }
      pages {
        edges {
          node {
            id
            title(format: RENDERED)
            slug
            uri
            isFrontPage
            featuredImage {
              node {
                altText
                mediaItemUrl
              }
            }
          }
        }
      }
      ${newsPosts}
      ${header}
      ${footer}
    }
    `,
    {
      variables: {
        id: slug,
        idType: "URI",
      },
    }
  );

  return data;
}
