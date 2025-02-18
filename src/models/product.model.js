import mongoose from "mongoose";
import BaseSchema from "#models/base";

const productSchema = new BaseSchema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
    file: true,
  },
  slug:{
    type:String,
    required:true
  },
  price: {
    type: String,
  },
});

export default mongoose.model("Product", productSchema);
