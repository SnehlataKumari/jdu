import * as mongoose from 'mongoose';
import { getKeys, USER_ROLES } from 'src/constants';
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
  paymentId: {type: String, required: true}
}, {
  timestamps: true
});

export const UserSchema = new mongoose.Schema({
  name: { 
    type: String,
    // required: [true, 'Name is required!'],
  },
  branch: {
    type: String,
  },
  designation: {
    type: String,
  },
  district: {
    type: String,
  },
  vidhanshabha: {
    type: String,
  },
  password: { // Only for admin
    type: String
  },
  username: { //only for admin
    type: String,
    unique: [true, 'Username already exists!']
  },
  email: {
    type: String
  },
  mobileNumber: {
    type: String,
    // required: [true, 'Mobile Number is required!'],
    // unique: [true, 'Mobile Number already exists!']
  },
  devices: [String],
  isBlocked: {type: Boolean, default: false},
  role: {
    type: String,
    enum: getKeys(USER_ROLES),
    default: USER_ROLES['USER'].key,
    required: true
  },
  otp: String
}, {
  timestamps: true
});
