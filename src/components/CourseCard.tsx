import React, {useState} from 'react'
import {Link} from "react-router-dom"
import {Paper} from "@material-ui/core"
import {BookmarkBorder as BookmarkEmpty, Bookmark as BookmarkFilled} from '@material-ui/icons';

export interface Props {
    imageUrl: string,
    duration: string,
    title: string,
    author: string,
    link: string,
    students: string
}

export default ({imageUrl, link, duration, title, author, students}: Props) => {
    const [bookmarked, setBookmarked] = useState(false);

    const handleClick = () => {
        setBookmarked(!bookmarked);
    }

    return (
        <Link to = {link} className = "course-card">
            <img src = {imageUrl} className = "course-image" alt = "Not found"/>
            <div className = "course-content">
                <div className = "separe separe_1">
                    <p>
                        {students} students
                    </p>
                    <p>
                        {duration}
                    </p>
                </div>
                <p className = "course-title">{title}</p>
                <div className = "separe separe_2">
                    <p>{author}</p>
                    {bookmarked ? <BookmarkFilled className = "bookmark bookmark_active" onClick = {handleClick}/> : <BookmarkEmpty className = "bookmark" onClick = {handleClick}/>}
                </div>
            </div>
        </Link>
    );
}