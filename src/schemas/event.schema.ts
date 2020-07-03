import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    // unique: [true, 'Subject title already exists!'],
    required: [true, 'Subject title is required!'],
  },
  description: {
    type: String,
  },
  typeOfEvent: {
    type: String
  }
}, {
  timestamps: true
});
export {EventSchema};