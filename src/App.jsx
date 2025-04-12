import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import EmptyCourseList from "./components/EmptyCourseList/EmptyCourseList";
import CourseInfo from "./components/CourseInfo/CourseInfo";
import { useState } from "react";
function App() {
  const [selectedCourse, setSelectedCourse] = useState(null)

  const handleOnClick = (course) => {
    setSelectedCourse(course)
  }
  const handleOnBack = () => {
    setSelectedCourse(null)
  }
  return (<>
    <Header />
    {selectedCourse ? (
      <CourseInfo course = {selectedCourse} onBack = {handleOnBack}/>)
      :
      (
        <Courses onCourseClick = {handleOnClick}/>
      )
    }
  </>)
}

export default App;
