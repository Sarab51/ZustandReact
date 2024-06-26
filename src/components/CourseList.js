import { Fragment } from "react";
import useCourseStore from "../app/courseStore";

const CourseList = () => {
  const { courses, removeCourse, toggleCourseStatus } = useCourseStore(
    (state) => ({
      courses: state.courses,
      removeCourse: state.removeCourse,
      toggleCourseStatus: state.toggleCourseStatus,
    })
  );

  return (
    <>
      <ul>
        {courses.map((course, i) => {
          return (
            <Fragment key={i}>
              <li
                className={"course-item"}
                style={{
                  backgroundColor: course.completed ? "#00FF0044" : "red",
                }}
              >
                <span className="course-item-col-1">
                  <input
                    type="checkbox"
                    checked={course.checked}
                    onChange={(e) => {
                      toggleCourseStatus(course.id);
                    }}
                  />
                </span>
                <span>{course?.title}</span>
                <button
                  onClick={() => {
                    removeCourse(course.id);
                  }}
                  className="delete btn"
                >
                  Delete
                </button>
              </li>
            </Fragment>
          );
        })}
      </ul>
    </>
  );
};
export default CourseList;
