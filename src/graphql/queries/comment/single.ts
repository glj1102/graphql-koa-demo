import { GraphQLID, GraphQLNonNull } from "graphql";

import { commentType } from "../../types/comment";
import { CommentModel } from "../../../models/comment";

export const comment = {
    type: commentType,
    args: {
        id: {
            name: "id",
            type: new GraphQLNonNull(GraphQLID),
        },
    },
    resolve(root, params, ctx, options) {
        return CommentModel.findById(params.id).exec();
    },
};
