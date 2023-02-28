const graphql = require("graphql");
const _ = require("lodash");
const { Client } = require("pg");
const Author = require("../Model/authors");
const book = require("../Model/Books");

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "690177",
  database: "test",
});
client.connect();
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

const Booktype = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    // nested query
    author: {
      type: Authortype,
      resolve(parent, args) {
        console.log(parent.authorID);
        return Author.findByPk(parent.authorID);
      },
    },
  }),
});
const Authortype = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(Booktype),
      resolve(parent, args) {
        return book.findByPk({ authorID: parent.id });
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  //root querys
  fields: {
    book: {
      type: Booktype,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return book.findByPk(args.id);
      },
    },
    author: {
      type: Authortype,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Author.findByPk(args.id);
      },
    },
    books: {
      type: new GraphQLList(Booktype),
      resolve(parent, args) {
        return book.findAll();
      },
    },
    authors: {
      type: new GraphQLList(Authortype),
      resolve(parent, args) {
        return Author.findAll();
      },
    },
  },
});
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addBook: {
      type: Booktype,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        authorID: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve: async (_, { id, name, genre, authorID }) => {
        const addedboooks = await book.create({
          id: id,
          name: name,
          genre: genre,
          authorID: authorID,
        });
        return addedboooks;
      },
    },
    addAuthor: {
      type: Authortype,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve: async (_, { id, name, age }) => {
        const addedAuthor = await Author.create({
          id: id,
          name: name,
          age: age,
        });
        return addedAuthor;
      },
    },
  },
});
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
