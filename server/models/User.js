import { Schema, model } from "mongoose";
import { hash, compare } from "bcrypt";
import favoriteSchema from "./Favorites";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must use a valid email address"],
    },
    password: {
      type: String,
      required: true,
    },

    favorite: [favoriteSchema],
  },

  {
    toJSON: {
      virtuals: true,
    },
  },
);

// hash user password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return compare(password, this.password);
};

const User = model("User", userSchema);

export default User;
