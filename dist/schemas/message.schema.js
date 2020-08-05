"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MessageSchema = new mongoose.Schema({
    message: {
        type: String,
    },
    mediumType: {
        SMS: {
            type: Boolean,
        },
        EMAIL: {
            type: Boolean,
        },
        PRIVATE: {
            type: Boolean,
        }
    },
    sendToType: {
        ALL: Boolean,
        CUSTOM: Boolean,
        STATE_LEVEL_USER: Boolean,
        BLOCK_LEVEL_USER: Boolean,
        DISTRICT_LEVEL_USER: Boolean,
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