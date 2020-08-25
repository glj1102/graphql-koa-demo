import { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLID } from "graphql";

export const commentType = new GraphQLObjectType({
    name: "Comment",
    fields: {
        _id: {
            type: new GraphQLNonNull(GraphQLID),
        },
        postId: {
            type: new GraphQLNonNull(GraphQLID),
        },
        text: {
            type: GraphQLString,
        },
    },
});
