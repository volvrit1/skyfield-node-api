import mongoose from "mongoose";
import BaseSchema from "#models/base";

const blogSchema = new BaseSchema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  image: {
    type: String,
    file: true,
  },
  author: {
    type: String,
    required: true,
  },
  slug:{
    type:String,
    required:true
  },
  date: {
    type: Date,
    required: true,
  },
});

export default mongoose.model("Blog", blogSchema);
