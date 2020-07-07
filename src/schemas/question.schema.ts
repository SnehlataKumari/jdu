import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const QuestionSchema = new mongoose.Schema({
  title: {
    type: String,
     unique: [true, 'Subject title already exists!'],
    //required: [true, 'Subject title is required!'],
  },
  description: {
    type: String,
  },
});
export { QuestionSchema };