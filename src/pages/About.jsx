// About.js

import React from "react";

const About = () => {
  return (
    <div className="md:container w-[90%] mt-10s mx-auto py-8 text-white  bg-gradient-to-r from-zinc-800 px-4 border rounded-2xl">
      <h1 className="text-3xl font-bold mb-4 text-white">
        About Our Employee Data Store
      </h1>
      <p className="mb-6">
        EmpSys is a web application built using the MERN (MongoDB, Express.js,
        React.js, Node.js) stack. This web app help you to easily store the
        details of employee and easily manage it. It provides CRUD (Create,
        Read, Update, Delete) functionality for managing employee data
        efficiently.
      </p>
      <h2 className="text-xl font-semibold mb-2">Features:</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Create, view, update, and delete employee records</li>

        <li>Responsive and user-friendly interface</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Front End </h2>
      <ul className="list-disc pl-6 mb-6">
        <li>React js</li>
        <li>css : Tailwind css</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">BackEnd </h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Database : mongodb</li>
        <li>Node js , express </li>
      </ul>
    </div>
  );
};

export default About;
