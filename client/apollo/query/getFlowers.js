import { gql } from '@apollo/client';

export const GET_FLOWERS = gql`
  query GetFlowers {
    flowersList {
      id
      title
      description
      colors
      price
      image
    }
  }
`;