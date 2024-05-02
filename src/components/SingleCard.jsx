import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

const SingleCard = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      {" "}
      <div className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl">
        <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
          {data.name}
        </h2>
        <h4 className="my-2 text-gray-500">{data._id}</h4>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="my-1">{data.age}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1">{data.salary}</h2>
        </div>
        <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
          {/* <BiShow
            className="text-3xl text-blue-800 hover:text-black cursor-pointer"
            onClick={() => setShowModal(true)}
          /> */}
          <Link to={`/employee/details/${data._id}`}>
            <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
          </Link>
          <Link to={`/employee/edit/${data._id}`}>
            <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
          </Link>
          <Link to={`/employee/delete/${data._id}`}>
            <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
          </Link>
        </div>
        {/* {showModal && (
          <BookModal book={book} onClose={() => setShowModal(false)} />
        )} */}
      </div>
    </div>
  );
};

export default SingleCard;
