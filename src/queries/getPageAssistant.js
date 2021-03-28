import { gql } from "@apollo/client";
// import { assistant } from "./getAssistants";
import { footer } from "./getFooter";
import { header } from "./getMenus";

export const GET_PAGE_ASSISTANT = gql`
  query assistant($id: ID!, $idType: PostIdType!) {
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
`;
