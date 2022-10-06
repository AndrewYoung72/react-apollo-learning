import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($firstname: String!, $lastname: String! $password: String!, $email: String!) {
    addUser(firstname: $firstname, lastname: $lastname, password: $password, email: $email) {
      token
      user {
        _id
        firstname
        lastname
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
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $id: ID!
    $firstname: String!
    $lastname: String!
    $password: String!
    $email: String!
  ) {
    updateUser(firstname: $firstname, lastname: $lastname, password: $password, email: $email) {
      token
      user {
        _id
        username
        email
        firstname
        lastname
      }
    }
  }
`;

export const REMOVE_USER = gql`
  mutation deleteUser(
    $id: ID!
    $firstname: String!
    $lastname: String!
    $password: String!
    $email: String!
  ) {
    deleteUser(id: ID, firstname: String, lastname: String, password: String, email: String) {
      token
      user {
        _id
        firstname
        lastname
        email
        favorites {
          favoritesId
          name
          brewery_type
          city
          street
        }
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstname
        lastname
        email
      }
    }
  }
`;

export const CREATE_FAVORITE = gql`
  mutation addFavorite($name: String!, $brewery_type: String!, $city: String!, $street: String!) {
    addFavorite(name: $name, brewery_type: $brewery_type, city: $city, street: $street) {
      _id
      name
      brewery_type
      city
      street
    }
  }
`;
