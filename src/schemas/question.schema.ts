import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const QuestionSchema = new mongoose.Schema({
  title: {
    type: String,
    //required: [true, 'Subject title is required!'],
  },
  description: {
    type: String,
  },
  category: {
    type: String,
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