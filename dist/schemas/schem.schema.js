"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemeSchema = void 0;
const mongoose = require("mongoose");
const constants_1 = require("../constants");
const Schema = mongoose.Schema;
const SchemeSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: [true, 'Subject title already exists!'],
    },
});
exports.SchemeSchema = SchemeSchema;
//# sourceMappingURL=schem.schema.js.map