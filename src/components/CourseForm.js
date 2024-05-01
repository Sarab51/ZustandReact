import { useState } from "react";
import useCourseStore from "../app/courseStore";

const CourseForm = () => {
  const addCourse = useCourseStore((state) => state.addCourse);

  const [courseTitle, SetCourseTitle] = useState("");
  console.log("CourseForm Rendered");

  const handleCourseSubmit = () => {
    if (!courseTitle) return alert("please Add course");
    addCourse({
      id: Math.ceil(Math.random() * 1000),
      title: courseTitle,
    });
    SetCourseTitle("");
  };

  return (
    <div className="form-contanier">
      <input
        value={courseTitle}
        onChange={(e) => {
          SetCourseTitle(e.target.value);
        }}
        className="form-input"
      />
      <button
        className="form-submit-btn"
        onClick={() => {
          handleCourseSubmit();
        }}
      >
        Add Course
      </button>
    </div>
  );
};
export default CourseForm;
