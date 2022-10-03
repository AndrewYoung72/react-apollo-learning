// import express, { urlencoded, json} from "express";
// import { ApolloServer } from "apollo-server-express";
// import { join } from "path";
// import { authMiddleware } from "./utils/auth.js";

// import { typeDefs, resolvers } from "./schemas/index.js";
// import  once  from "./config/connection.js";

// const PORT = process.env.PORT || 3001;
// const app = express();
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: authMiddleware,
// });

// app.use(urlencoded({ extended: false }));
// app.use(json());

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(join(__dirname, "../client/build")));
// }

// app.get("/", (req, res) => {
//   res.sendFile(join(__dirname, "../client/build/index.html"));
// });

// // Create a new instance of an Apollo server with the GraphQL schema
// const startApolloServer = async (typeDefs, resolvers) => {
//   await server.start();
//   server.applyMiddleware({ app });

//   once("open", () => {
//     app.listen(PORT, () => {
//       console.log(`API server running on port ${PORT}!`);
//       console.log(
//         `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
//       );
//     });
//   });
// };

// // Call the async function to start the server
// startApolloServer(typeDefs, resolvers);
import express, { urlencoded, json } from 'express';
import db from "./config/connection.js";
// const db = require("./config/connection")
// import routes from './routes';

const PORT = 3001;
const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());
app.get("/");

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});