"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandBiharSchema = void 0;
const mongoose = require("mongoose");
exports.BrandBiharSchema = new mongoose.Schema({
    videoUrl: {
        type: String,
    },
    title: String,
    description: {
        type: String,
    },
}, { timestamps: true });
//# sourceMappingURL=brandBihar.schema.js.map