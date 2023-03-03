import { useMutation, useQuery } from "@apollo/client";
import { DELETE_BOOK } from "../Mutations/deleteMutaion";
import { GET_ABOOK, GET_BOOKS } from "../queries/queries";
import { Link, useParams } from "react-router-dom";
export default function ClientRow({ books }) {
  const [deletebook] = useMutation(DELETE_BOOK, {
    variables: { id: books.id },
    refetchQueries: [{ query: GET_BOOKS }],
  });

  return (
    <>
      <tr>
        <Link to={`/abook/${books.id}`}>
          <td>{books.id}</td>
        </Link>
        <td>{books.name}</td>
        <td>{books.genre}</td>
        <td>{books.author.name}</td>
        <td>
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={deletebook}
          >
            <i class="bi bi-trash3"></i>
          </button>
        </td>
      </tr>
    </>
  );
}
