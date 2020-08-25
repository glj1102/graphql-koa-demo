import { GraphQLList, GraphQLNonNull, GraphQLID } from "graphql";

import { commentType } from "../../types/comment";
import { CommentModel } from "../../../models/comment";

export const comments = {
    type: new GraphQLList(commentType),
    args: {
        postId: {
            name: "postId",
            type: new GraphQLNonNull(GraphQLID),
        }
    },
    resolve(root, params, ctx, options) {
        return CommentModel.find({
            postId: params.postId,
        }).exec();
    },
};
