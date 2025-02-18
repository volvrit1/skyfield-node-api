import mongoose from "mongoose";
import BaseSchema from "#models/base";
import { saveFile } from "#utils/uploadFile";

// Sub-section Schema 1
const subSectionSchema1 = new BaseSchema({
  title: { type: String, trim: true },
  subtitle: { type: String, trim: true },
  description: { type: String, trim: true },
  image1: { type: String, file: true },
  subContents: [
    {
      title: { type: String, trim: true },
      description: { type: String, trim: true }
    }
  ]
});

// Sub-section Schema 2
const subSectionSchema2 = new BaseSchema({
  title: { type: String, trim: true },
  subtitle: { type: String, trim: true },
  description: { type: String, trim: true },
  image2: { type: String, file: true },
  subContents: [
    {
      title: { type: String, trim: true },
      description: { type: String, trim: true }
    }
  ]
});

// Main Application Schema
const applicationSchema = new BaseSchema({
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
  section1: subSectionSchema1,
  section2: subSectionSchema2
});

// Apply file-saving middleware
subSectionSchema1.pre("save", saveFile);
subSectionSchema2.pre("save", saveFile);
applicationSchema.pre("save", saveFile);

export default mongoose.model("Application", applicationSchema);
