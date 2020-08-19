"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose = require("mongoose");
const constants_1 = require("../constants");
const Schema = mongoose.Schema;
const paymentSchema = new Schema({
    paymentId: { type: String, required: true }
}, {
    timestamps: true
});
exports.UserSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    branch: {
        type: String,
    },
    designation: {
        type: String,
    },
    district: {
        type: String,
    },
    vidhanshabha: {
        type: String,
    },
    password: {
        type: String
    },
    username: {
        type: String,
        unique: [true, 'Username already exists!']
    },
    email: {
        type: String
    },
    mobileNumber: {
        type: String,
    },
    devices: [String],
    isBlocked: { type: Boolean, default: false },
    role: {
        type: String,
        enum: constants_1.getKeys(constants_1.USER_ROLES),
        default: constants_1.USER_ROLES['USER'].key,
        required: true
    },
    otp: String
}, {
    timestamps: true
});
//# sourceMappingURL=user.schema.js.map