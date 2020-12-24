import {Props as Course} from "./components/CourseCard";
import {CourseSliderElement} from "./components/CourseSlider"
const course1: Course = {
    author: "John Walker",
    duration: "1h 33m",
    imageUrl: "https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/e89b19f912dcb5604c3b88ea32ca62d2/original",
    link: "/random-course",
    title: "Learn how to suparat people and then they hate you because yes!",
    students: "1,276"
}
const course2: Course = {
    author: "VANILLA JON",
    duration: "2h 35m",
    imageUrl: "https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/e89b19f912dcb5604c3b88ea32ca62d2/original",
    link: "/random-course",
    title: "LEARN HOW TO MAKE GOD WEBSITE OK?",
    students: "69,420"
}
const courseSliderData: CourseSliderElement[] = [
    {
        title: "Why are you gae",
        description: "To inspire the world about gae and how it helped people learn more about themselves",
        link: "https://static.skillshare.com/assets/images/homepage/promo-banner/hallease-narvaez-bg-desktop.jpg",
        courseLink: "course-link"
    },
    {
        title: "Why are you not so gae",
        description: "To inspire the world about gae and how it helped people learn more about themselves",
        link: "https://static.skillshare.com/assets/images/homepage/promo-banner/danni-fisher-shin-bg-desktop.jpg",
        courseLink: "course-link"
    },
    {
        title: "Why are you  so gae",
        description: "To inspire the world about gae and how it helped people learn more about themselves",
        link: "https://static.skillshare.com/assets/images/homepage/promo-banner/olivia-wilde-bg-desktop.jpg",
        courseLink: "course-link"
    },
]

export {course1, course2, courseSliderData};