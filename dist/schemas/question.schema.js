"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const QuestionSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: [true, 'Subject title already exists!'],
    },
    description: {
        type: String,
    },
});
exports.QuestionSchema = QuestionSchema;
//# sourceMappingURL=question.schema.js.map