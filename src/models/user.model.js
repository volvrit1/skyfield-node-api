import mongoose from "mongoose";
import BaseSchema from "#models/base";

const userSchema = new BaseSchema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
  },
  profilePic: {
    type: String,
    file: true
  },
  mobileNo: {
    type: String
  },
  isActive: {
    type: String,
    default: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model("User", userSchema);
