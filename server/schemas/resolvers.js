/* eslint-disable import/first */
const { User} =require( "../models/User");
const { signToken } =require( "../utils/auth");
const { AuthenticationError } =require("apollo-server-express");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("favorites");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
  Mutation: {
    addUser: async (parent, { firstname, lastname, email, password }) => {
      console.log(firstname, lastname, email);
      const user = await User.create({ firstname, lastname, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password");
      }

      const token = signToken(user);

      return { token, user };
    },
    addFavorite: async (parent, { name, brewery_type, city, street }, context) => {
      if (context.user) {
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { favorites: { name, brewery_type, city, street } } }
        );

        return { _id: null, name, brewery_type, city, street };
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers
