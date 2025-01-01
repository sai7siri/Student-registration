import React, { useState } from "react";
import { useDataContext } from "./Context";

const Course = () => {
  const { course, setCourse } = useDataContext();
  const [TypeText, setTypeText] = useState("");
  const [handleToggle, setHandleToggle] = useState(false);
  const [currIdx, setCurrIdx] = useState(null);

  // courseType.map( (type)=> console.log(type));
  const handleAdd = () => {
    if(TypeText.trim() === '') return alert('enter course')
    setCourse((prev) => [...prev, TypeText]);
    setTypeText("");
  };

  const handleEditData = () => {
    if(TypeText.trim() === '') return alert('enter course')
    setCourse((prev) =>
      prev.map((text, index) => (index === currIdx ? TypeText : text))
    );
    setTypeText("");
    setHandleToggle(false);
  };

  const handleEdit = (type, idx) => {
    // const textEdit = courseType.findIndex( ( _ , idx) => idx === id);
    setHandleToggle(true);
    setTypeText(type);
    setCurrIdx(idx);
  };

  const handleDelte = (id) => {
    setCourse((prev) => prev.filter((_, idx) => idx !== id));
  };

  return (
    <div>
      <h3 className="text-stone-600 text-lg font-medium pl-7 sm:pl-0">Course:</h3>
      <div className="flex flex-col items-center sm:flex-row gap-4">
      <input
        type="text"
        placeholder="enter course"
        className="ring-1 ring-gray-600 p-2 rounded-md"
        value={TypeText || ""}
        onChange={(e) => setTypeText(e.target.value)}
        />
      <button
        className="mx-5 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-slate-400"
        onClick={handleToggle ? handleEditData : handleAdd}
        >
        {handleToggle ? "Edit-Course-Type" : "Add-Course-Type"}
      </button>
       </div>
      <ul className="mt-4 list-inside list-decimal overflow-auto max-h-[200px]">
        {course &&
          course.length > 0 &&
          course.map((type, idx) => (
            <div key={idx} className="flex items-center gap-4 py-1 max-w-full px-1">
              <li className="font-serif text-lg flex-1">{type.toUpperCase()}</li>
              <button
                className="px-3 py-1 bg-yellow-400 text-black rounded-md"
                onClick={() => handleEdit(type, idx)}
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

export default Course;
