import { gql } from "@apollo/client";
import { footer } from "./getFooter";
import { header } from "./getMenus";
import { fetchAPI } from "../../lib/api/fetchApi";

export async function getDentists(slug) {
  const data = await fetchAPI(
    `
    query AllDentists($id: ID!, $idType: PageIdType!, $name: String!) {
      page(id: $id, idType: $idType) {
        title
        content(format: RENDERED)
        featuredImage {
          node {
            altText
            mediaItemUrl
          }
        }
      }
      posts(where: {categoryName: $name}) {
        edges {
          node {
            title(format: RENDERED)
            content(format: RENDERED)
            featuredImage {
              node {
                altText
                mediaItemUrl
              }
            }
            slug
            uri
          }
        }
      }
      ${header}
      ${footer}
    }
    `,
    {
      variables: {
        id: slug,
        idType: "URI",
        name: slug,
      },
    }
  );

  return data;
}

export async function getDentistsUri(slug) {
  const data = await fetchAPI(
    `
    query AllDentists {
      pages {
        edges {
          node {
            slug
            dentistsPages {
              isDentist
            }
          }
        }
      }
    }
    `
  );

  return data;
}

/**
 * Get ALL pages.
 *
 */
export const GET_ALL_PAGES_URI = gql`
  query GET_ALL_PAGES_URI {
    dentists: pages {
      edges {
        node {
          slug
        }
      }
    }
    assistants: posts(where: { categoryName: "assistant" }) {
      edges {
        node {
          slug
          categories {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
  }
`;
