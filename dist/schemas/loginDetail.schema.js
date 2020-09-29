"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginDetail = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const LoginDetail = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    ip: String,
    date: Date
}, {
    timestamps: true
});
exports.LoginDetail = LoginDetail;
//# sourceMappingURL=loginDetail.schema.js.map