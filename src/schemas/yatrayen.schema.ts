import * as mongoose from 'mongoose';

const YatrayenSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
  },
  title: {
    type: String,
    // unique: [true, 'Subject title already exists!'],
    required: [true, 'Yatrayen title is required!'],
  },
  description: {
    type: String,
  },
}, {
  timestamps: true
});

export { YatrayenSchema };