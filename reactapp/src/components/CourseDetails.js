import React, { useContext } from "react";
import { CourseContext } from "../context/CourseContext";
import { useParams } from "react-router-dom";

function CourseDetails() {
  const { id } = useParams();
  const { courses, updateStatus } = useContext(CourseContext);

  const course = courses.find(
    (c) => c.id.toString() === id
  );

  if (!course) return null;

  return (
    <div>
      <p>{course.name}</p>
      <p>{course.duration}</p>
      <p>{course.status}</p>

      {course.status === "Pending" && (
        <button onClick={() => updateStatus(course.id)}>
          Update Status
        </button>
      )}
    </div>
  );
}

export default CourseDetails;
