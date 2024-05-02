import React, { useState } from "react";

import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const CreateEmployee = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [salary, setSalary] = useState("");
  const [experience, setExperience] = useState("");
  const [jobTitle, setjobTitle] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  // const notify = () => toast('Here is your toast.');
  const handleSave = (e) => {
    e.preventDefault();
    const data = {
      name,
      age,
      salary,
      experience,
      jobTitle,
      address,
    };
    setLoading(true);
    axios
      .post("/api/data", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Employee Created successfully", {
          variant: "success",
        });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        setError(error.response.data.message);
        // alert('An error happened. Please Chack console');
        // enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };
  return (
    <>
      <div className="py-12 min-h-screen">
        <h1 className="md:text-5xl my-12 text-3xl text-center text-zinc-400 font-bold ">
          Create Employee
        </h1>
        {loading ? <Spinner /> : ""}
        {error && <p className="text-center text-red-700 mb-4">{error}</p>}
        <div className="flex flex-col border border-zinc-500 rounded-xl w-[85%] md:w-[600px] p-4 md:px-8 mx-auto bg-gradient-to-r from-zinc-800">
          <div className="my-4 flex flex-col gap-2">
            <label className="text-xl  text-gray-500 ">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-gray-800 px-4 py-2  w-full rounded-full bg-black/70 border text-zinc-400"
            />
          </div>
          <div className="my-4 flex flex-col gap-2">
            <label className="text-xl mr-4 text-gray-500">Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="border-gray-800 px-4 py-2  w-full rounded-full bg-black/70 border text-zinc-400"
            />
          </div>
          <div className="my-4 flex flex-col gap-2">
            <label className="text-xl mr-4 text-gray-500">Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="border-gray-800 px-4 py-2  w-full rounded-full bg-black/70 border text-zinc-400"
            />
          </div>
          <div className="my-4 flex flex-col gap-2">
            <label className="text-xl mr-4 text-gray-500">Salary</label>
            <input
              type="number"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              className=" border-gray-800 px-4 py-2  w-full rounded-full bg-black/70 border text-zinc-400"
            />
          </div>
          <div className="my-4 flex flex-col gap-2">
            <label className="text-xl mr-4 text-gray-500">Experience</label>
            <input
              type="text"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="border-gray-800 px-4 py-2  w-full rounded-full bg-black/70 border text-zinc-400"
            />
          </div>{" "}
          <div className="my-4 flex flex-col gap-2">
            <label className="text-xl mr-4 text-gray-500">JobTitle</label>
            <input
              type="text"
              value={jobTitle}
              onChange={(e) => setjobTitle(e.target.value)}
              className="border-gray-800 px-4 py-2  w-full rounded-full bg-black/70 border text-zinc-400"
            />
          </div>
          <button
            className="py-4 my-8 w-[40%] mx-auto border rounded-full hover:border-slate-400  font-bold text-xl bg-black border-gray-700 text-zinc-500"
            onClick={handleSave}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateEmployee;
