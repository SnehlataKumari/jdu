import * as mongoose from 'mongoose';

export const BrandBiharSchema = new mongoose.Schema({
  videoUrl: {
    type: String,
  },
  description: {
    type: String,
  },
},
{ timestamps: true}
);