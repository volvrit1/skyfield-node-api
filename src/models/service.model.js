import mongoose from "mongoose";
import BaseSchema from "#models/base";
import { saveFile } from "#utils/uploadFile";

const serviceSchema = new BaseSchema({
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
      title: { type: String, required: [true, "Section 1 title is required"], trim: true },
      subtitle: { type: String, trim: true },
      description: { type: String, trim: true },
      image: { type: String },
    },
    section2: {
      title: { type: String, trim: true },
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
      title: { type: String, trim: true },
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

serviceSchema.pre("save", saveFile)

export default mongoose.model("Service", serviceSchema);
