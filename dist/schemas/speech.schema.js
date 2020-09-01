"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeechSchema = void 0;
const mongoose = require("mongoose");
exports.SpeechSchema = new mongoose.Schema({
    videoUrl: {
        type: String,
    },
    title: String,
    description: {
        type: String,
    },
}, { timestamps: true });
//# sourceMappingURL=speech.schema.js.map