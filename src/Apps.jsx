import React, { useState } from "react";
import CourseType from "./Students/CourseType";
import Course from "./Students/Course";
import OfferingCourse from "./Students/OfferingCourse";

const Apps = () => {
  const [toggleCourse, setToggleCourse] = useState(false);
  const [openCourse, setOpenCourse] = useState(false);

  return (
    <div className="w-full">
      <h1 className="text-cyan-700 font-bold text-xl text-center mt-2">
        Student-Registration-System 📝
      </h1>
      <div className="w-full flex justify-center ">
        <button
          onClick={() => setOpenCourse(!openCourse)}
          className="my-4 font-bold px-4 py-2 rounded-md  bg-red-500"
        >
          Open-Course
        </button>
      </div>

      {!openCourse && (
        <>
        <div className="flex items-center justify-around sm:justify-center sm:gap-10">
          <p
            onClick={() => setToggleCourse(false)}
            className={`text-lg text-teal-600 cursor-pointer ${
              toggleCourse === false
                ? "underline underline-offset-4 decoration-[2px]"
                : ""
            }`}
          >
            Course-Type
          </p>
          <p
            className={`text-lg text-teal-600 cursor-pointer ${
              toggleCourse === true
                ? "underline underline-offset-4 decoration-[2px]"
                : ""
            }`}
            onClick={() => setToggleCourse(true)}
          >
            Course
          </p>
        </div>
      <div className="flex items-center flex-col sm:items-start sm:flex-row justify-around py-4 border-b-2 border-black">
        {toggleCourse ? <Course /> : <CourseType />}
      </div>
      </>
      )}

      <OfferingCourse />
    </div>
  );
};

export default Apps;
