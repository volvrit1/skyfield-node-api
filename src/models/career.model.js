import mongoose from "mongoose";
import BaseSchema from "#models/base";
import { saveFile } from "#utils/uploadFile";

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
})

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
})

const subSectionSchema3 = new BaseSchema({
  title: { type: String, trim: true },
  subtitle: { type: String, trim: true },
  description: { type: String, trim: true },
  image3: { type: String, file: true },
  subContents: [
    {
      title: { type: String, trim: true },
      description: { type: String, trim: true }
    }
  ]
})

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
  section1: subSectionSchema1,
  section2: subSectionSchema2,
  section3: subSectionSchema3
});

subSectionSchema1.pre("save", saveFile)
subSectionSchema2.pre("save", saveFile)
subSectionSchema3.pre("save", saveFile)
careerSchema.pre("save", saveFile)

export default mongoose.model("Career", careerSchema);
