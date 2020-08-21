import { GraphQLNonNull, GraphQLID } from "graphql";

import blogPostType from "../../types/blog-post";
import { BlogPostModel } from "../../../models/blog-post";

export default {
    type: blogPostType,
    args: {
        _id: {
            name: "_id",
            type: new GraphQLNonNull(GraphQLID),
        },
    },
    async resolve(root, params, ctx, options) {
        const removedBlogPost = await BlogPostModel.findByIdAndRemove(params._id).exec();
        if (!removedBlogPost) {
            throw new Error("Error removing blog post");
        }

        return removedBlogPost;
    },
};
