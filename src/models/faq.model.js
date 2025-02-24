import BaseSchema from "#models/base";
import mongoose from "mongoose";

const faqSchema = new BaseSchema({
  url: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
    default: true,
  },
});

const FaqModel = mongoose.model("faq", faqSchema);

export default FaqModel;
