import { GET_BOOKS } from "../queries/queries";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Spinner from "./Spinner";
import ClientRow from "./ClientRow";

export default function Books() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  return (
    <>
      <div>
        {" "}
        {loading && <Spinner />}
        {!loading && (
          <table className="table table-hover mt-2">
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>genre</th>
                <th>author</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.books.map((book) => (
                <ClientRow books={book} />
              ))}
            </tbody>
          </table>
        )}
        <Link to={"/addbook"}>
          <button className="btn btn-outline-info btn-sm"> Add book </button>
        </Link>
      </div>
    </>
  );
}
