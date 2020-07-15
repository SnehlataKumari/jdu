import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
  questionId: {
    type: Schema.Types.ObjectId,
    ref: 'Question',
    required: true
  },
  answer: {type: String, required: true}
});


export { AnswerSchema };