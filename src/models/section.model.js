import mongoose from "mongoose";
import BaseSchema from "#models/base";
import { saveFile } from "#utils/uploadFile";

const contentSchema = new BaseSchema({
  title: { type: String, trim: true },
  subtitle: { type: String, trim: true },
  description: { type: String, trim: true },
  image: { type: String },
  icon: { type: String },
  video: { type: String },
  link: { type: String },
});

const sectionSchema = new BaseSchema({
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
  },
  description: {
    type: String,
  },
  coverImage: {
    type: String,
    file: true,
  },
  videoUrl: {
    type: String,
    file: true,
  },
  slug: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
  contents: {
    type: [contentSchema],
    multiFile: true,
    fileKey: "image",
  },
});

sectionSchema.pre("save", saveFile);

export default mongoose.model("Section", sectionSchema);
