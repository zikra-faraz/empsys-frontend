import React, { useEffect, useState } from "react";
import axios from "axios";
// import Spinner from "../components/Spinner";

import { Link } from "react-router-dom";

import Card from "../components/Card";
import Spinner from "../components/Spinner";
import { serverUrl } from "../constant";

// import BooksTable from "../components/home/BooksTable";
// import BooksCard from "../components/home/BooksCard";

const ShowAll = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");
  // const notify = () => toast("Here is your toast.");

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${serverUrl}/api/data/all`)
      .then((response) => {
        // console.log(response.data.data);
        setData(response.data.data);

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="">
        {/* <button onClick={notify}>Make me a toast</button> */}
        <div className="h-auto md:h-[35rem] w-full rounded-md flex flex-col  items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
          <div className="p-4 relative z-10 w-full text-center">
            <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-12">
              All Employees Data
            </h1>
            <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
              "Here, you can view all the employee data. You can easily update
              and delete the data "
            </p>
            <div className="mt-8">
              <Link to={"/employee/create"}>
                <button
                  borderRadius="1.75rem"
                  className="py-4 px-6 border rounded-full hover:border-slate-400 text-white/70"
                >
                  Add Employee
                </button>
              </Link>
            </div>
          </div>
        </div>

        {loading ? <Spinner /> : <Card data={data} />}
      </div>
    </>
  );
};

export default ShowAll;
