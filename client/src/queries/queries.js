import { gql } from "@apollo/client";
const GET_BOOKS = gql`
  query getBooks {
    books {
      id
      name
      genre
      author {
        name
      }
    }
  }
`;
const GET_ABOOK = gql`
  query getABook($id: ID!) {
    book(id: $id) {
      id
      name
      genre
      author {
        name
      }
    }
  }
`;

export { GET_BOOKS, GET_ABOOK };
