import mongoose from "mongoose";
import BaseSchema from "#models/base";
import { saveFile } from "#utils/uploadFile";

const careerSchema = new BaseSchema({
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
  videoUrl: {
    type: String,
    file: true
  },
  contents: {
    section1: {
      title: { type: String,  trim: true },
      subtitle: { type: String, trim: true },
      description: { type: String, trim: true },
      image: { type: String },
      subContents: [
        {
          title: { type: String, trim: true },
          description: { type: String, trim: true }
        }
      ]
    },
    section2: {
      title: { type: String,  trim: true },
      subtitle: { type: String, trim: true },
      description: { type: String, trim: true },
      image: { type: String },
      subContents: [
        {
          title: { type: String, trim: true },
          description: { type: String, trim: true }
        }
      ]
    },
    section3: {
      title: { type: String,  trim: true },
      subtitle: { type: String, trim: true },
      description: { type: String, trim: true },
      image: { type: String },
      subContents: [
        {
          title: { type: String, trim: true },
          description: { type: String, trim: true }
        }
      ]
    },
  }
});

careerSchema.pre("save", saveFile)

export default mongoose.model("Career", careerSchema);
