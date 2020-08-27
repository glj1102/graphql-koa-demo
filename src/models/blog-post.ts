import mongoose from "mongoose";

const blogPostSchema = new mongoose.Schema({
    title: {
        type: String,
        // required: true,
    },
    description: {
        type: String,
    },
});

export const BlogPostModel = mongoose.model("BlogPost", blogPostSchema);
