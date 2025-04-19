import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import EmptyCourseList from "./components/EmptyCourseList/EmptyCourseList";
import CourseInfo from "./components/CourseInfo/CourseInfo";
import { useState } from "react";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration"
import CreateCourse from "./components/CreateCourse/CreateCourse";
import { mockedCoursesList } from "./constants";


function App() {
  const [selectedCourse, setSelectedCourse] = useState(null)

  const handleOnClick = (course) => {
    setSelectedCourse(course)
  }
  const handleOnBack = () => {
    setSelectedCourse(null)
  }
  const handleAddCourse = (course) => {
    console.log("Course added:", course);
  }
  return (<>
    <Header />
    {/* <Registration/> */}
    {/* <Login/> */}
    <CreateCourse onCreateCourse={handleAddCourse} />
    {/* {selectedCourse ? (
      <CourseInfo course = {selectedCourse} onBack = {handleOnBack}/>)
      : mockedCoursesList.length === 0 ? (
        <EmptyCourseList/>
      ) :
      (
        <Courses onCourseClick = {handleOnClick}/>
      )
    } */}
  </>)
}

export default App;
