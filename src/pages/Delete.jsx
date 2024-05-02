import React, { useState } from "react";

import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import { serverUrl } from "../constant";

const Delete = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    console.log(id);
    setLoading(true);
    axios
      .delete(`${serverUrl}/api/data/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Employee's data Deleted successfully", {
          variant: "success",
        });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-2 border-zinc-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl text-white">
          Are You Sure You want to delete this data?
        </h3>

        <button
          className="p-4 bg-red-900 hover:bg-red-950 rounded-2xl text-white m-8 w-full"
          onClick={handleDeleteBook}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};

export default Delete;
