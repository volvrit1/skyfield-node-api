import mongoose from "mongoose";
import BaseSchema from "#models/base";

const newsSchema = new BaseSchema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  coverImage: {
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
  slug:{
    type:String,
    required:true
  },
  date: {
    type: Date,
    required: true,
  },
});

export default mongoose.model("News", newsSchema);
