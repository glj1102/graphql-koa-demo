import { GraphQLList, GraphQLID, GraphQLNonNull, GraphQLString } from "graphql";
import { Types } from "mongoose";

import blogPostType from "../../types/blog-post";
import { BlogPostModel } from "../../../models/blog-post";

export const blogPost = {
    type: blogPostType,
    args: {
        id: {
            name: "id",
            type: new GraphQLNonNull(GraphQLID),
        },
        // title: {
        //     type: GraphQLString
        // }
    },
    resolve(root, params, ctx, options) {
        const blog = BlogPostModel.findById(params.id).exec();
        return blog;
    }
};
