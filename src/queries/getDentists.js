import { gql } from "@apollo/client";
import FeaturedImageFragment from "./fragments/featuredImage";

export const dentists = `
  posts(where: {categoryName: "dentist"}) {
    edges {
      node {
        id
        title(format: RENDERED)
        uri
        link
        featuredImage {
          node {
            ...FeaturedImageFragment
          }
        }
      }
    }
  }
`;

export const GET_DENTISTS = gql`
  query GET_DENTISTS {
    ${dentists}
  }
  ${FeaturedImageFragment}
`;
