import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { serverUrl } from "../constant";

const Show = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${serverUrl}/api/data/${id}`)
      .then((response) => {
        // console.log(response);
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <div className="p-4 ">
        <h1 className="md:text-5xl my-12 text-3xl text-center text-zinc-400 font-bold ">
          Single Employee Data
        </h1>
        {loading ? (
          <Spinner />
        ) : (
          <div className="w-[90%] md:w-[75%] mx-auto shadow-2xl ">
            <div className="flex flex-col border border-zinc-400 rounded-xl  p-4 justify-center  bg-gradient-to-r from-zinc-800">
              <div className="my-4 text-gray-300">
                <span className="text-xl mr-4 text-gray-500">Id</span>
                <span>{data._id}</span>
              </div>

              <div className="my-4 text-gray-300">
                <span className="text-xl mr-4 text-gray-500 ">
                  Employee Name
                </span>
                <span>{data.name}</span>
              </div>
              <div className="my-4 text-gray-300">
                <span className="text-xl mr-4 text-gray-500">Age</span>
                <span>{data.age}</span>
              </div>
              <div className="my-4 text-gray-300">
                <span className="text-xl mr-4 text-gray-500">Address</span>
                <span>{data.address}</span>
              </div>
              <div className="my-4 text-gray-300">
                <span className="text-xl mr-4 text-gray-500">Job Title</span>
                <span>{data.jobTitle}</span>
              </div>
              <div className="my-4 text-gray-300">
                <span className="text-xl mr-4 text-gray-500">Salary</span>
                <span>{data.salary}</span>
              </div>
              <div className="my-4 text-gray-300">
                <span className="text-xl mr-4 text-gray-500">Experience</span>
                <span>{data.experience}</span>
              </div>
              <div className="my-4 text-gray-300">
                <span className="text-xl mr-4 text-gray-500">Create Time</span>
                <span>{new Date(data.createdAt).toString()}</span>
              </div>
              <div className="my-4 text-gray-300">
                <span className="text-xl mr-4 text-gray-500">
                  Last Update Time
                </span>
                <span>{new Date(data.updatedAt).toString()}</span>
              </div>
              <div className="flex gap-2">
                <Link
                  to={`/employee/edit/${data._id}`}
                  className="py-3 px-6 border text-zinc-400 rounded-2xl"
                >
                  Edit
                </Link>
                <Link
                  to={`/employee/delete/${data._id}`}
                  className="py-3 px-6 border text-zinc-400 rounded-2xl"
                >
                  Delete
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Show;
