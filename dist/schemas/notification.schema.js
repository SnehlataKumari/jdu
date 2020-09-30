"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const NotificationSchema = new mongoose.Schema({
    message: {
        type: String,
    },
    notificationType: {
        type: String,
        enum: ['BrandBihar', 'Speeches', 'Documents', 'Upcoming Event']
    },
    sendToType: {
        ALL: Boolean,
        CUSTOM: Boolean,
        SUPER_ADMIN: Boolean,
        ADMIN: Boolean,
        STATE_LEVEL_USER: Boolean,
        BLOCK_LEVEL_USER: Boolean,
        DISTRICT_LEVEL_USER: Boolean,
        NATIONAL_LEVEL_USER: Boolean,
    },
    usersId: [{
            type: Schema.Types.ObjectId,
            ref: 'User',
        }]
}, {
    timestamps: true
});
exports.NotificationSchema = NotificationSchema;
//# sourceMappingURL=notification.schema.js.map