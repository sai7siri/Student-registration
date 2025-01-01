
import { createContext, useContext, useState } from "react";

const ContextProvider = createContext();

// exporting directly useContext
export const useDataContext=()=>{
   return useContext(ContextProvider);
}

export const ContextStore=({children})=>{
   const [courseType , setCourseType] = useState(['special']);
   const [course , setCourse] = useState(['english']);
   const [offeringCourse , setOfferingCourse] = useState([]);
   const [studentReg , setStudentReg] = useState([]);

   const value = {
      course,
      setCourse,
      courseType,
      setCourseType,
      offeringCourse,
      setOfferingCourse,
      studentReg,
      setStudentReg,
      
   }

   return(
      <ContextProvider.Provider value={value}>
         {children}
      </ContextProvider.Provider>
   )

}
