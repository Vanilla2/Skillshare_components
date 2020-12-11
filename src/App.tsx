import React from 'react';
import './styles/Navbar.css';
import './styles/CourseCard.css';
import Navbar from "./components/Navbar";
import CourseCard, {Props as CourseProps} from "./components/CourseCard";
import {HashRouter as Router} from "react-router-dom";

const course: CourseProps = {
    author: "John Walker",
    duration: "1h 33m",
    imageUrl: "https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/e89b19f912dcb5604c3b88ea32ca62d2/original",
    link: "/random-course",
    title: "Learn how to suparat people and then they hate you because yes!",
    students: "1,276"
}

function App() {
  return(
    <Router>
        <Navbar/>
        <div style = {{margin: "15px"}}>
            <CourseCard {...course} />
        </div>
    </Router>
  )
}

export default App;
