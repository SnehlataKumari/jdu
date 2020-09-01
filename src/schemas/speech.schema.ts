import * as mongoose from 'mongoose';

export const SpeechSchema = new mongoose.Schema({
    videoUrl: {
        type: String,
    },
    title: String,
    description: {
        type: String,
    },
},
    { timestamps: true }
);