import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import EmptyCourseList from "./components/EmptyCourseList/EmptyCourseList";
import CourseInfo from "./components/CourseInfo/CourseInfo";
import { useEffect, useState } from "react";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import CreateCourse from "./components/CreateCourse/CreateCourse";
import { mockedCoursesList } from "./constants";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";

function App() {
  const token = localStorage.getItem("token");
  const location = useLocation();
  const [courses, setCourses] = useState(mockedCoursesList)
  const navigate = useNavigate();

  const handleOnClick = (course) => {
    navigate(`/courses/${course.id}`); 
  };

  const handleOnBack = () => {
    navigate("/courses"); 
  };

  const handleAddCourse = (course) => {
    setCourses((prevCourses => [...prevCourses, course]))
    navigate("/courses")
  };
  useEffect(() => {
    console.log(courses)
  }, [courses])

  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/register" && <Header/>}
      <Routes>
        <Route
          path="/"
          element={token ? <Navigate to="/courses" /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route
          path="/courses"
          element={
            courses.length === 0 ? (
              <EmptyCourseList />
            ) : (
              <Courses
                courses={courses}
                onCourseClick={handleOnClick}
              />
            )
          }
        />
        <Route path="/courses/add" element={<CreateCourse onCreateCourse={handleAddCourse}/>} />
        <Route
          path="/courses/:courseId"
          element={<CourseInfo onBack={handleOnBack} courses = {courses}/>}
        />
      </Routes>
    </>
  );
}

export default App;
