import * as mongoose from 'mongoose';
import { getCategory, QUESTION_CATEGORY } from 'src/constants';
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
  category: {
    type: String,
    enum: getCategory(QUESTION_CATEGORY),
    // default: QUESTION_CATEGORY['FARMER'].key,
    required: true
  },
  options: [String]
});

QuestionSchema.virtual('answers', {
  ref: 'Answer', // The model to use
  localField: '_id', // Find people where `localField`
  foreignField: 'questionId', // is equal to `foreignField`
});


export { QuestionSchema };