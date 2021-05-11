import { GraphQLServer } from "graphql-yoga";
import { v4 as uuid } from "uuid";
import types from "./graphql/type/index";
import db from "./db/db.config";
import Query from "./graphql/resolvers/query.resolver";
import Mutation from "./graphql/resolvers/mutation.resolver";
import User from "./graphql/resolvers/user.resolver";
import Post from "./graphql/resolvers/post.resolver";
import Comment from "./graphql/resolvers/comment.resolver";

const server = new GraphQLServer({
  typeDefs: types,
  resolvers: {
    Query,
    Mutation,
    User,
    Post,
    Comment,
  },
  context: {
    db,
  },
});

server.start(() => {
  console.log(`Server is up!`);
});
