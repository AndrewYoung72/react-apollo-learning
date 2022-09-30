import { Schema, Types } from "mongoose";

const favoriteSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    name: {
      type: String,
    },
    lat: {
      type: Number,
    },
    lon: {
      type: Number,
    },
  },

  {
    toJSON: {
      getters: true,
    },
    id: false,
  },
);

export default favoriteSchema;
