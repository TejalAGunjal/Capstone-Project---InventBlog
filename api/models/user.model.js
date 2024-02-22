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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG5rNO4a3FsxZyzfH32qzRfG5V1LmPjyMKNA&usqp=CAU",
    },
  },
  { timestamps: true }
);

//create model
const User = mongoose.model("User", userSchema);

export default User;
