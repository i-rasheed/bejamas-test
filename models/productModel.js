const mongoose = require ('mongoose');

// var recommendationSchema = new Schema({
//   src : {type: String},
//   alt : {type: String}
// });

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    price: { type: String, required: true },
    currency: { type: String, required: true },
    image: { type: String },
    bestSeller: { type: Boolean, required: true, default: false},
    featured: { type: Boolean, required: true, default: false},
    details: { 
    dimensions: {
      type : { type: String },
      width: { type: Number},
      height: { type: Number}
    },
    size: {type: Number},
    description: {type: String},
    recommendations: [
      {
        src: {type: String},
        alt: {type: String}
      }
    ]
    }
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
