import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query User {
  user {
    _id
    firstName
    lastName
    email
    favorites {
      _id
      name
      brewery_type
      city
      street
    }
  }
}
`;
