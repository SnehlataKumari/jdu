"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Subject title is required!'],
    },
    description: {
        type: String,
    },
    typeOfEvent: {
        type: String
    }
}, {
    timestamps: true
});
exports.EventSchema = EventSchema;
//# sourceMappingURL=event.schema.js.map