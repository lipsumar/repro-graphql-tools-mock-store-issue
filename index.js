import { createMockStore, addMocksToSchema } from "@graphql-tools/mock";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { graphql } from "graphql";

const executableSchema = makeExecutableSchema({
  typeDefs: `
    type Book {
      id: Int
      title: String
    }
    type Query {
      booksViaMocks: [Book]
      booksViaResolvers: [Book]
      booksViaResolvers2: [Book]
      book: Book
    }
  `,
});
const mocks = {
  String: () => "A custom String mock",
  Book: {
    title: () => "Mock value for Book.title",
  },
  Query: {
    booksViaMocks: () => [...new Array(3)],
  },
};
const resolvers = {
  Query: {
    booksViaResolvers: () => [...new Array(3)],
    booksViaResolvers2: () => [...new Array(3)].map(() => ({})),
  },
};
const store = createMockStore({ schema: executableSchema, mocks });
const schemaWithMocks = addMocksToSchema({
  schema: executableSchema,
  store,
  resolvers,
});
const res = await graphql({
  schema: schemaWithMocks,
  source: `
    query {
      book {
        id
        title
      }
      booksViaMocks {
        id
        title
      }
      booksViaResolvers {
        id
        title
      }
      booksViaResolvers2 {
        id
        title
      }
    }
  `,
});
console.log(JSON.stringify(res, null, 2));
