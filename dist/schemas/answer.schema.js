"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AnswerSchema = new Schema({
    questionId: {
        type: Schema.Types.ObjectId,
        ref: 'Question',
        required: true
    },
    comment: String,
    destrict: String,
    vidhanSabha: String,
    mobileNumber: String,
    name: String,
    answer: { type: String, required: true }
});
exports.AnswerSchema = AnswerSchema;
//# sourceMappingURL=answer.schema.js.map