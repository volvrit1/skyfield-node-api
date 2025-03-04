import mongoose from "mongoose";
import { commentSchema } from "#models/news";
import BaseSchema from "#models/base";
import { saveFile } from "#utils/uploadFile";


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

blogSchema.pre("save", saveFile)

export default mongoose.model("Blog", blogSchema);
