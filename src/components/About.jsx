import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
        My name's Kampannart Poonpanao
        </p>

        <br />

        <p className="text-xl">
        My nickname's Soccer.<br /> <br />
        Student ID: 6303051633093<br /> <br />
        Major: EnET-C
        </p>
      </div>
    </div>
  );
};

export default About;
