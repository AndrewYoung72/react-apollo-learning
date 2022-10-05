const { Schema, Types } = require("mongoose");

const favoritesSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    name: {
      type: String,
    },
    brewery_type: {
      type: String,
    },
    city: {
      type: String,
    },
    street: {
      type: String,
    },
  },

  {
    toJSON: {
      getters: true,
    },
    id: false,
  },
);

module.exports = favoritesSchema;
