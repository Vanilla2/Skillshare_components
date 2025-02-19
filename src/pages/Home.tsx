import React from 'react'
import CourseCard from "../components/CourseCard";
import CourseSlider from '../components/CourseSlider';
import CourseCardCarousel from "../components/CourseCardCarousel"
import {course1, course2, courseSliderData} from "../sampleData";

export interface Props {
    [key: string]: any
}

const Home = (props: Props) => {

    return (
        <section className="home">
            <CourseSlider data = {courseSliderData} />
            <section className="container">
                <div className="course-list">
                    <p className="title">
                        Featured On Fakeshare
                    </p>
                    <CourseCardCarousel>
                        <CourseCard {...course1} />
                        <CourseCard {...course1} />
                        <CourseCard {...course1} />
                        <CourseCard {...course1} />
                        <CourseCard {...course2} />
                        <CourseCard {...course2} />
                        <CourseCard {...course2} />
                        <CourseCard {...course2} />
                    </CourseCardCarousel>
                </div>
            </section>
            <section className="container">
                <div className="course-list">
                    <p className="title">
                        Trending Now
                    </p>
                    <CourseCardCarousel>
                        <CourseCard {...course1} />
                        <CourseCard {...course1} />
                        <CourseCard {...course1} />
                        <CourseCard {...course1} />
                        <CourseCard {...course2} />
                        <CourseCard {...course2} />
                        <CourseCard {...course2} />
                        <CourseCard {...course2} />
                    </CourseCardCarousel>
                </div>
            </section>
        </section>
    );
}

export default Home;