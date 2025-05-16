import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import CourseInfo from "./components/CourseInfo/CourseInfo";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import CreateCourse from "./components/CreateCourse/CreateCourse";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const token = localStorage.getItem("token");
  const location = useLocation();
  const navigate = useNavigate();
  const courses = useSelector(state => state.courses); 

  const handleOnClick = (course) => {
    navigate(`/courses/${course.id}`); 
  };

  const handleOnBack = () => {
    navigate("/courses"); 
  };

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
          element={<Courses onCourseClick={handleOnClick} />}
        />
        <Route path="/courses/add" element={<CreateCourse />} />
        <Route
          path="/courses/:courseId"
          element={<CourseInfo onBack={handleOnBack} courses={courses} />}
        />
      </Routes>
    </>
  );
}

export default App;
