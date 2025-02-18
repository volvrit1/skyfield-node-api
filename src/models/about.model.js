import mongoose from "mongoose";
import BaseSchema from "#models/base";
import { saveFile } from "#utils/uploadFile";

const aboutSchema = new BaseSchema({
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
      title: { type: String, trim: true },
      subtitle: { type: String, trim: true },
      description: { type: String, trim: true },
      image: { type: String },
    },
    section2: {
      title: { type: String, trim: true },
      subtitle: { type: String, trim: true },
      description: { type: String, trim: true },
      image: { type: String },
    },
    section3: {
      title: { type: String, trim: true },
      subtitle: { type: String, trim: true },
      description: { type: String, trim: true },
      image: { type: String },
    },
    section4: {
      title: { type: String, trim: true },
      subtitle: { type: String, trim: true },
      description: { type: String, trim: true },
      subContents: [
        {
          title: { type: String, trim: true },
          description: { type: String, trim: true }
        }
      ]
    },
    section5: {
      title: { type: String, trim: true },
      subtitle: { type: String, trim: true },
      description: { type: String, trim: true },
      subContents: [
        {
          title: { type: String, trim: true },
          description: { type: String, trim: true }
        }
      ]
    }
  }

});

aboutSchema.pre("save", saveFile)

export default mongoose.model("Page", aboutSchema);
