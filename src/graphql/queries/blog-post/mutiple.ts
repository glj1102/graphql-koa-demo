import { GraphQLList, GraphQLObjectType, GraphQLID, GraphQLNonNull, GraphQLResolveInfo } from "graphql";

import blogPostType from "../../types/blog-post";
import { BlogPostModel } from "../../../models/blog-post";

export const blogPosts = {
    type: new GraphQLList(blogPostType),
    resolve(root, params, ctx, info) {
        return BlogPostModel.find({}).exec();
    }
};
