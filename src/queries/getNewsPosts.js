import { fetchAPI } from "@/src/apollo/fetchApi";
import { footer } from "./getFooter";
import { header } from "./getMenus";

export const newsPosts = `
  posts(where: {categoryName: "nieuws"}) {
    edges {
      node {
        id
        title(format: RENDERED)
        uri
        link
        date
        slug
        excerpt(format: RENDERED)
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

export async function getNewsPosts(slug) {
  const data = await fetchAPI(
    `
    query AllNews($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        title
        slug
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

export async function getAllNewsPaths(categoryName) {
  const data = await fetchAPI(
    `
    query AllNewsPaths($name: String!) {
      posts(where: {categoryName: $name}) {
        edges {
          node {
            slug
            uri
          }
        }
      }
    }
    `,
    {
      variables: {
        name: categoryName,
      },
    }
  );

  return data;
}

export async function getAllNews(categoryName) {
  const data = await fetchAPI(
    `
    query AllNewsPaths($id: ID!, $idType: PageIdType!, $name: String!) {
      page(id: $id, idType: $idType) {
        content(format: RENDERED)
        featuredImage {
          node {
            altText
            mediaItemUrl
          }
        }
        title(format: RENDERED)
        uri
        slug
      }
      posts(where: {categoryName: $name}) {
        edges {
          node {
            id
            uri
            slug
            title(format: RENDERED)
            content(format: RENDERED)
            featuredImage {
              node {
                altText
                mediaItemUrl
              }
            }
          }
        }
      }
      ${header}
      ${footer}
    }
    `,
    {
      variables: {
        id: categoryName,
        idType: "URI",
        name: categoryName,
      },
    }
  );

  return data;
}
