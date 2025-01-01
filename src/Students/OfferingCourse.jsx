import React, { useState } from "react";
import { useDataContext } from "./Context";

const OfferingCourse = () => {
  const { course, courseType, offeringCourse, setOfferingCourse } =
    useDataContext();
  const [selectedCourseType, setSelectedCourseType] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAddAndUpdate = () => {
    if (selectedCourse.trim() === "" || selectedCourseType.trim() === "") {
      return alert("select course");
    }

    const newOffering = `${selectedCourseType} - ${selectedCourse}`;

    if (selectedCourse && selectedCourseType) {
      if (editIndex !== null) {
        setOfferingCourse(
          offeringCourse.map((offer, index) =>
            editIndex === index ? newOffering : offer
          )
        );
        setEditIndex(null);
      } else {
        if (offeringCourse.includes(newOffering)) {
          return alert("this course offer is already existed");
        }
        setOfferingCourse([...offeringCourse, newOffering]);
      }

      setSelectedCourse("");
      setSelectedCourseType("");
    }
  };

  const handleEdit = (offer, index) => {
    const [type, course] = offer.split(" - ");
    console.log(type, course);
    setSelectedCourseType(type.trim());
    setSelectedCourse(course.trim());
    setEditIndex(index);
  };
  const handleDelte = (id) => {
    setOfferingCourse(offeringCourse.filter((_, idx) => idx !== id));
  };

  console.log(selectedCourse , selectedCourseType);

  return (
    <div>
      <h2 className="text-lg text-green-500 text-center font-semibold">
        Offering-Courses
      </h2>

      <div className="flex sm:items-end items-center flex-col sm:flex-row  gap-4 justify-center py-3">
        {editIndex !== null ? (
         <label className="flex flex-col gap-1 items-center">
            CourseType - Course
          <input
            type="text"
            className="ring-1 ring-gray-600 p-2 rounded-md"
            value={`${selectedCourseType} - ${selectedCourse}`}
            onChange={(e) => {
               const [newType , newCourse] = e.target.value.split(' - ')
               setSelectedCourseType(newType || '')
               setSelectedCourse(newCourse || '')
            }}
            />
            </label>
        ) : (
          <>
            <select
              className="px-3 py-1 ring-1 rounded-sm ring-black"
              value={selectedCourseType}
              onChange={(e) => setSelectedCourseType(e.target.value)}
            >
              <option value="" className="text-pink-600 font-medium">
                Select-CourseType
              </option>
              {courseType &&
                courseType.map((type, idx) => (
                  <option key={idx} value={type}>
                    {type}
                  </option>
                ))}
            </select>

            <select
              className="px-3 py-1 ring-1 rounded-sm ring-black"
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
            >
              <option value="" className="text-pink-600 font-medium">
                Select-Course
              </option>
              {course &&
                course.map((type, idx) => (
                  <option key={idx} value={type}>
                    {type}
                  </option>
                ))}
            </select>
          </>
        )}
        <button
          className={`px-3 py-1 rounded-md text-white ${
            editIndex === null ? "bg-blue-500" : "bg-amber-700"
          }`}
          onClick={handleAddAndUpdate}
        >
          {editIndex === null ? "Add-Offering" : "Update-Offering"}
        </button>
      </div>

      <ul className="flex flex-col gap-3 items-center justify-center px-5 py-4 list-decimal list-inside w-full">
        {offeringCourse &&
          offeringCourse.map((offer, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row items-center gap-2 max-w-md w-full border border-zinc-700 p-2">
              <li
                key={idx}
                className="flex-1 mr-7 text-slate-800 font-serif font-semibold"
              >
                {offer}
              </li>
              <button
                className="px-3 py-1 bg-yellow-400 text-black rounded-md"
                onClick={() => handleEdit(offer, idx)}
              >
                edit
              </button>
              <button
                className="px-3 py-1 bg-red-600 text-white rounded-md"
                onClick={() => handleDelte(idx)}
              >
                delete
              </button>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default OfferingCourse;
