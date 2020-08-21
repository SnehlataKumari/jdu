import * as mongoose from 'mongoose';

export const BrandBiharSchema = new mongoose.Schema({
  videoUrl: {
    type: String,
  },
  title: String,
  description: {
    type: String,
  },
},
{ timestamps: true}
);