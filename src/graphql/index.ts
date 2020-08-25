import { GraphQLObjectType, GraphQLSchema } from "graphql";

import { mutations } from "./mutations";
import { queries } from "./queries";

export const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "Query",
        fields: queries,
    }),
    mutation: new GraphQLObjectType({
        name: "Mutation",
        fields: mutations,
    })
});
