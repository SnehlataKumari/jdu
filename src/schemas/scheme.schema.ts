import * as mongoose from 'mongoose';
const SchemeSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: [true, 'Scheme already exists!'],
  },
});

export { SchemeSchema };