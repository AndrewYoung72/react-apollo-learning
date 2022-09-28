import { findOne, create } from "../models";
import { signToken } from "../utils/auth";
import { AuthenticationError } from "apollo-server-express";

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        return findOne({ _id: context.user._id }).populate("favorites");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      console.log(username);
      const user = await create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    // addFavorite: async (parent, { name, lat, lon }, context) => {
    //   if (context.user) {
    //     await User.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $addToSet: { favorites: { name, lat, lon } } }
    //     );

    //     return { _id: null, name, lat, lon };
    //   }
    //   throw new AuthenticationError("You need to be logged in!");
    // },
  },
};

export default resolvers;
