import { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLID, GraphQLList } from "graphql";
import { comments } from "../queries/comment/mutiple";

export const blogPostType = new GraphQLObjectType({
    name: "BlogPost",
    fields: {
        _id: {
            type: new GraphQLNonNull(GraphQLID),
        },
        title: {
            type: GraphQLString,
        },
        description: {
            type: GraphQLString,
        },
        comments: comments
    }
});
