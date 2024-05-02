import SingleCard from "./SingleCard";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
const Card = ({ data }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  mx-20">
      {data.map((item) => (
        <>
          <Link to={`/employee/details/${item._id}`}>
            {" "}
            <div class="max-w-sm rounded-xl overflow-hidden shadow-lg border border-slate-600 mb-8 bg-gradient-to-r from-zinc-800 ">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 text-gray-300 capitalize">
                  {item.name}
                </div>
                <p class="text-gray-400 text-base">{item.jobTitle}</p>
                <p class="text-gray-400 text-base">{item.experience}</p>
              </div>
              <div class="px-4 pt-4 pb-2 flex flex-col gap-2">
                <div class="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2">
                  Age : <span className="text-zinc-400"> {item.age}</span>
                </div>
                <div class="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-300">
                  Salary :{" "}
                  <span className="text-zinc-400"> ₹{item.salary}</span>
                </div>
                <div class="inline-blockrounded-full px-3 py-1 text-sm font-semibold text-gray-300">
                  Address :{" "}
                  <span className="text-zinc-400"> {item.address}</span>
                </div>

                <span className="text-zinc-300 px-3 mt-6  py-2 border rounded-3xl w-fit flex items-center gap-2">
                  view more <FaLongArrowAltRight />
                </span>
              </div>
            </div>
          </Link>
        </>
      ))}
    </div>
  );
};

export default Card;
