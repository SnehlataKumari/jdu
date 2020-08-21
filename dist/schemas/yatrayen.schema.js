"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YatrayenSchema = void 0;
const mongoose = require("mongoose");
const YatrayenSchema = new mongoose.Schema({
    imageUrl: {
        type: String,
    },
    title: {
        type: String,
        required: [true, 'Yatrayen title is required!'],
    },
    description: {
        type: String,
    },
}, {
    timestamps: true
});
exports.YatrayenSchema = YatrayenSchema;
//# sourceMappingURL=yatrayen.schema.js.map