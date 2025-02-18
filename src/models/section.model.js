import mongoose from "mongoose";
import BaseSchema from "#models/base";
import { saveFile } from "#utils/uploadFile";

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
  image: {
    type: String,
    file: true,
  },
  videoUrl: {
    type: String,
    file: true
  },
  slug: {
    type: String,
    require:true
  },
  contents: [
    {
      title: { type: String, required: [true, "Content title is required"], trim: true },
      subtitle: { type: String, trim: true },
      description: { type: String, trim: true },
      image: { type: String },
      icon: { type: String },
      video: { type: String },
    }
  ]
});

sectionSchema.pre("save",saveFile)

export default mongoose.model("Section", sectionSchema);
