import { fetchAPI } from "../../lib/api/fetchApi";
import { footer } from "./getFooter";
import { header } from "./getMenus";

export const assistants = `
  query assistants($id: String!) {
    posts(where: {categoryName: $id}) {
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
  }
`;

export const assistant = `
  posts(where: { categoryName: $category, name: $name }) {
    edges {
      node {
        title(format: RENDERED)
        content(format: RENDERED)
        uri
        featuredImage {
          node {
            altText
            mediaItemUrl
          }
        }
      }
    }
  }
`;

export async function getAssistants(slug) {
  const data = await fetchAPI(
    `
    query AllDentists($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        title
        content(format: RENDERED)
        featuredImage {
          node {
            altText
            mediaItemUrl
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
        idType: "SLUG",
      },
    }
  );

  return data;
}
