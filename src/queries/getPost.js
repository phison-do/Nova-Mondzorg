import { gql } from "@apollo/client";

export const GET_POST = gql`
  query GET_POST($id: String!) {
    post(id: $id) {
      title
      content(format: RENDERED)
      featuredImage {
        node {
          altText
          mediaItemUrl
        }
      }
    }
  }
`;
