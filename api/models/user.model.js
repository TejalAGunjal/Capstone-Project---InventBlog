import mongoose from "mongoose";

// create user schema
const userSchema = new mongoose.Schema(
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
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        "https://img.freepik.com/photos-premium/belle-illustration-fee-couleurs-vibrantes_363897-2631.jpg",
    },
  },
  { timestamps: true }
);

//create model
const User = mongoose.model("User", userSchema);

export default User;
