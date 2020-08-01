"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MessageSchema = new mongoose.Schema({
    message: {
        type: String,
    },
    usersId: [{
            type: Schema.Types.ObjectId,
            ref: 'User',
        }]
}, {
    timestamps: true
});
exports.MessageSchema = MessageSchema;
//# sourceMappingURL=message.schema.js.map