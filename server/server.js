const { ApolloServer, gql } = require('apollo-server');
const mongoose = require("mongoose");

const MONGODB = "mongodb+srv://AndrewYoung72:andy12345y@cluster0.vcwmv.mongodb.net/beerDB?retryWrites=true&w=majority";

const typeDefs = require("./schemas/typeDefs");
const resolvers = require("./schemas/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers
});

mongoose.connect(MONGODB, {useNewUrlParser: true})
  .then(() => {
    console.log("MoongoDB connection successful");
    return server.listen({port: 4000});
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`)
  })