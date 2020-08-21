import Koa from "koa";
import { schema } from "./graphql";
import mongoose from "mongoose";
import graphqlHTTP from "koa-graphql";
import mount from "koa-mount";

const app = new Koa();

// GraphqQL server route

app.use(
    mount(
        "/graphql",
        graphqlHTTP({
            schema: schema,
            graphql: true,
        })
    )
);

// Connect mongo database
mongoose.connect("mongodb://localhost:27017/graphql", { useMongoClient: true });

// start server
const server = app.listen(8080, () => {
    console.log("Listening at port 8080");
});
