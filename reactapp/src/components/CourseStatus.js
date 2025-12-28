import React from "react";

function CourseStatus({ status, onUpdate }) {
  return (
    <div>
      <p>Status: {status}</p>

      {status === "Pending" && (
        <button onClick={onUpdate}>
          Update Status
        </button>
      )}
    </div>
  );
}

export default CourseStatus;
