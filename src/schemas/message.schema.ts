import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const MessageSchema = new mongoose.Schema({
  message: {
    type: String,
    //required: [true, 'Subject title is required!'],
  },
  usersId: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }]
},{
  timestamps: true
});


export { MessageSchema };