import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import CourseInfo from "./components/CourseInfo/CourseInfo";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import CreateCourse from "./components/CreateForm/CreateForm";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCurrentUser } from "./store/user/thunk";
import { getCourses } from "./store/courses/actions"

function App() {
  const token = localStorage.getItem("token");
  const location = useLocation();
  const navigate = useNavigate();
  const courses = useSelector(state => state.courses); 
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(fetchCurrentUser());
      dispatch(getCourses()); 
    }
  }, [dispatch]);

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
          element={
            token ? (
              <Navigate to="/courses" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route 
          path="/login" 
          element={
            token ? (
              <Navigate to="/courses" />
            ) : (
              <Login />
            )
          } 
        />
        <Route path="/register" element={<Registration />} />
        <Route
          path="/courses"
          element={<Courses onCourseClick={handleOnClick} />}
        />
        <Route
          path="/courses/add"
          element={
            <PrivateRoute>
              <CreateCourse />
            </PrivateRoute>
          }
        />
        <Route
          path="/courses/:courseId"
          element={<CourseInfo onBack={handleOnBack} courses={courses} />}
        />
        <Route
          path="/courses/update/:courseId"
          element={
            <PrivateRoute>
              <CreateCourse />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
