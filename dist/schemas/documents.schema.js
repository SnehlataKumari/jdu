"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentSchema = void 0;
const mongoose = require("mongoose");
const constants_1 = require("../constants");
const Schema = mongoose.Schema;
const DocumentSchema = new Schema({
    path: {
        type: String,
        required: true
    },
    roles: { type: [String], enum: constants_1.getKeys(constants_1.USER_ROLES) }
});
exports.DocumentSchema = DocumentSchema;
//# sourceMappingURL=documents.schema.js.map