import React, { createContext, useState } from "react";

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);

  const addCourse = (course) => {
    setCourses((prev) => [...prev, course]);
  };

  const updateStatus = (id) => {
    setCourses((prev) =>
      prev.map((course) =>
        course.id === id
          ? { ...course, status: "Active" }
          : course
      )
    );
  };

  return (
    <CourseContext.Provider value={{ courses, addCourse, updateStatus }}>
      {children}
    </CourseContext.Provider>
  );
};
