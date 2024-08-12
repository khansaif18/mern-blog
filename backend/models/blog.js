import mongoose, { Schema } from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    coverImageUrl: {
        type: String,
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
}, { timestamps: true })

export const Blog = mongoose.model('blog', blogSchema)

