import mongoose from "mongoose";
import { commentSchema } from "#models/news";
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
  slug: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  comments: [commentSchema],
});

export default mongoose.model("Blog", blogSchema);
