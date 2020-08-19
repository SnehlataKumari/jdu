import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const YatrayenSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  title: {
    type: String,
    // unique: [true, 'Subject title already exists!'],
    required: [true, 'Subject title is required!'],
  },
  description: {
    type: String,
  },
}, {
  timestamps: true
});

export { YatrayenSchema };