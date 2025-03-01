import mongoose from "mongoose";
import { saveFile } from "#utils/uploadFile";
import BaseSchema from "#models/base";

export const commentSchema = new BaseSchema(
  {
    name: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
      default: new Date(),
    },
    comment: {
      type: String,
      required: true,
    },
    approved: {
      type: Boolean,
      require: true,
      default: false,
    },
  },
  {
    _id: false,
  },
);

const newsSchema = new BaseSchema({
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
  tag: {
    type: String,
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
  comment: [commentSchema],
});

newsSchema.pre("save", saveFile);

export default mongoose.model("News", newsSchema);
