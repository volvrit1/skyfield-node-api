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
      description: { type: String, trim: true },
    },
  ],
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
      description: { type: String, trim: true },
    },
  ],
});

// Sub-section Schema 3
const subSectionSchema3 = new BaseSchema({
  title: { type: String, trim: true },
  subtitle: { type: String, trim: true },
  description: { type: String, trim: true },
  image3: { type: String, file: true },
  subContents: [
    {
      title: { type: String, trim: true },
      description: { type: String, trim: true },
    },
  ],
});

// Sub-section Schema 4
const subSectionSchema4 = new BaseSchema({
  title: { type: String, trim: true },
  subtitle: { type: String, trim: true },
  description: { type: String, trim: true },
  subContents: [
    {
      title: { type: String, trim: true },
      description: { type: String, trim: true },
    },
  ],
});

// Sub-section Schema 5
const subSectionSchema5 = new BaseSchema({
  title: { type: String, trim: true },
  subtitle: { type: String, trim: true },
  description: { type: String, trim: true },
  subContents: [
    {
      title: { type: String, trim: true },
      description: { type: String, trim: true },
    },
  ],
});

// Main Service Schema
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
    file: true,
  },
  section1: subSectionSchema1,
  section2: subSectionSchema2,
  section3: subSectionSchema3,
  section4: subSectionSchema4,
  section5: subSectionSchema5,
});

// Apply file-saving middleware
serviceSchema.pre("save", saveFile);
subSectionSchema1.pre("save", saveFile);
subSectionSchema2.pre("save", saveFile);
subSectionSchema3.pre("save", saveFile);
subSectionSchema4.pre("save", saveFile);
subSectionSchema5.pre("save", saveFile);

export default mongoose.model("Service", serviceSchema);
