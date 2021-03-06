"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const QuestionSchema = new mongoose.Schema({
    title: {
        type: String,
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
exports.QuestionSchema = QuestionSchema;
QuestionSchema.virtual('answers', {
    ref: 'Answer',
    localField: '_id',
    foreignField: 'questionId',
});
//# sourceMappingURL=question.schema.js.map