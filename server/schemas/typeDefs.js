const { gql } =require("apollo-server-express");

const typeDefs = gql`
  type Favorite {
    _id: ID
    name: String
    brewery_type: String
    city: String
    street: String
  }
  type User {
    _id: ID
    username: String
    email: String
    favorites: [Favorite]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addFavorite( name: String!, brewery_type: String!, city: String!, street: String!): Favorite
    
  }
`;

module.exports = typeDefs;