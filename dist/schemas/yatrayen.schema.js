"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YatrayenSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const YatrayenSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Subject title is required!'],
    },
    description: {
        type: String,
    },
}, {
    timestamps: true
});
exports.YatrayenSchema = YatrayenSchema;
//# sourceMappingURL=yatrayen.schema.js.map