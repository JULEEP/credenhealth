import mongoose from 'mongoose';

// Category Schema
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true, // Ensures category names are unique
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const Category = mongoose.model('Category', categorySchema);

export default Category;
