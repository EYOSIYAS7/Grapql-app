import { GET_ABOOK } from "../queries/queries";
import { useQuery } from "@apollo/client";
import ClientRow from "./ClientRow";
import Spinner from "./Spinner";
import { useParams } from "react-router-dom";
export default function Abook() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_ABOOK, {
    variables: { id },
  });
  return (
    <div>
      {loading && <Spinner />}
      {!loading && (
        <div className="container justify-content-center">
          <h3>Title: {data.book.name}</h3>
          <h4>Genre: {data.book.genre}</h4>
          <h5>Author: {data.book.author.name}</h5>
        </div>
      )}
    </div>
  );
}
