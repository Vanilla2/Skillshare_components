import React from 'react';
import './styles/Navbar.css';
import './styles/CourseCard.css';
import './styles/CourseCardCarousel.css'
import Navbar from "./components/Navbar";
import CourseCard, {Props as CourseProps} from "./components/CourseCard";
import CourseCardCarousel from "./components/CourseCardCarousel"
import {HashRouter as Router} from "react-router-dom";

const course: CourseProps = {
    author: "John Walker",
    duration: "1h 33m",
    imageUrl: "https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/e89b19f912dcb5604c3b88ea32ca62d2/original",
    link: "/random-course",
    title: "Learn how to suparat people and then they hate you because yes!",
    students: "1,276"
}
const course2: CourseProps = {
  author: "VANILLA JON",
  duration: "2h 35m",
  imageUrl: "https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/e89b19f912dcb5604c3b88ea32ca62d2/original",
  link: "/random-course",
  title: "LEARN HOW TO MAKE GOD WEBSITE OK?",
  students: "69,420"
}

function App() {
  return(
    <Router>
        <Navbar/>
        <div style = {{margin: "15px"}}>
            <CourseCardCarousel>
              <CourseCard {...course} />
              <CourseCard {...course} />
              <CourseCard {...course} />
              <CourseCard {...course} />
              <CourseCard {...course2} />
              <CourseCard {...course2} />
              <CourseCard {...course2} />
              <CourseCard {...course2} />
            </CourseCardCarousel>
        </div>
    </Router>
  )
}

export default App;
