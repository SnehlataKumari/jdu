import { timeStamp } from 'console';
import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const LoginDetail = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  ip: String,
  date: Date
}, {
  timestamps: true
});


export { LoginDetail };