import { gql } from "@apollo/client";

const DELETE_BOOK = gql`
  mutation deleteBook($id: ID!) {
    deleteBook(id: $id) {
      name
      genre
    }
  }
`;

const ADD_BOOK = gql`
  mutation addBook($id: ID!, $name: name!, $genre: String!, $authorID: ID!) {
    addBook(id: $id , name: $name, $genre: $genre, $authorID: $authorID) {
      id
      name
      genre
    }
  }
`;
export { DELETE_BOOK };
