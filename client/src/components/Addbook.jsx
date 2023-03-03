import { useState } from "react";
import { ADD_BOOK } from "../Mutations/deleteMutaion";
import { useMutation, useQuery } from "@apollo/client";
export default function Addbook() {
  const { id, setID } = useState("");
  const { name, setName } = useState("");
  const { genre, setGener } = useState("");
  const { authoId, setAuthorId } = useState("");

  //   const [addbook] = useMutation(ADD_BOOK, {
  //     variables: {
  //       id: id,
  //       name: name,
  //       genre: genre,
  //       authoId: authoId,
  //     },
  //   });
  return (
    <>
      <form className="form" action="">
        <label className="form-label">id</label>
        <input
          type="text"
          className="form-control"
          value={id}
          onChange={(e) => setID(e.target.value)}
        />
        <label className="form-label">name</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          e
        />
        <label className="form-label">genre</label>
        <input
          type="text"
          className="form-control"
          value={genre}
          onChange={(e) => setGener(e.target.value)}
        />
        <label className="form-label">author id</label>
        <input
          type="text"
          className="form-control"
          value={authoId}
          onChange={(e) => setAuthorId(e.target.value)}
        />
        <button>add</button>
      </form>
    </>
  );
}
