import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CourseProvider } from "./context/CourseContext";

ReactDOM.render(
  <CourseProvider>
    <App />
  </CourseProvider>,
  document.getElementById("root")
);
