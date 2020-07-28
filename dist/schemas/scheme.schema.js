"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemeSchema = void 0;
const mongoose = require("mongoose");
const SchemeSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: [true, 'Scheme already exists!'],
    },
});
exports.SchemeSchema = SchemeSchema;
//# sourceMappingURL=scheme.schema.js.map