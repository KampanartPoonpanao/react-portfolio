import React from "react";

const Education = () => {
  const educations = [];

  return (
    <div
      name="education"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen education"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Education
          </p>
          <p className="py-6">Elementary school: Anubannongki school</p>
          <p className="py-6">High school: Ratchasima Witthayalai school</p>
          <p className="py-6">Bachelor Degrees: King Mongkut's University of Technology north Bangkok</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
