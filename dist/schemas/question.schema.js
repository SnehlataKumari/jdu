"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionSchema = void 0;
const mongoose = require("mongoose");
const constants_1 = require("../constants");
const Schema = mongoose.Schema;
const QuestionSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: [true, 'Subject title already exists!'],
    },
    description: {
        type: String,
    },
    category: {
        type: String,
        enum: constants_1.getCategory(constants_1.QUESTION_CATEGORY),
        default: constants_1.QUESTION_CATEGORY['FARMER'].key,
    },
    options: [String]
});
exports.QuestionSchema = QuestionSchema;
QuestionSchema.virtual('answers', {
    ref: 'Answer',
    localField: '_id',
    foreignField: 'questionId',
});
//# sourceMappingURL=question.schema.js.map