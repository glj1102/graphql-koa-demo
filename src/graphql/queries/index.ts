import { blogQueries } from "./blog-post";
import { commentQueries } from "./comment";

export const queries = {
    ...blogQueries,
    ...commentQueries,
};
