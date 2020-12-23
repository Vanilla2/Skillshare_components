import React, { useState, useEffect } from 'react'
import {IconButton} from "@material-ui/core";
import ArrowRight from '@material-ui/icons/ArrowForwardIos';
import ArrowLeft from '@material-ui/icons/ArrowBackIos';
import { cacheImages } from '../utils';

export interface CourseSliderElement {
    link: string,
    title: string,
    description: string,
}

export interface Props {
    data: CourseSliderElement[];
}

const CourseSlider = ({data}: Props) => {
    const [selected, setSelected] = useState(0);
    const [loading, setLoading] = useState(false);

    const next = () => {
        if (selected + 1 !== data.length){
            setSelected(selected + 1);
        }
        else{
            setSelected(0);
        }
    }

    const previous = () => {
        if (selected !== 0){
            setSelected(selected - 1);
        }
        else{
            setSelected(data.length - 1);
        }
    }

    useEffect(() => {
        const urls = data.map(x => x.link);
        cacheImages(urls);
    }, [])

    if (loading) {
        return null;
    }

    return (
        <div className="course-slider">
            {data.map((x, index) => (
                <div className = {`banner ${index === selected ? "active": "inactive"}`} style = {{backgroundImage: `url(${x.link})`}}/>
            ))}
            {data.map((x, index) => (
                <div className={`content ${index === selected ? "active": "inactive"}`}>
                    <p className="title">
                        {x.title}
                    </p>
                    <div className="p description">
                        {x.description}
                    </div>
                </div> 
            ))}
            <div className="gradient"/>
            <div className="slider">
                <IconButton onClick = {previous} className = "arrow-left arrow">
                    <ArrowLeft style = {{marginLeft: "5px", width: "21px"}}/>
                </IconButton>
                {data.map((x, index) => (
                    <div className={`circle ${index === selected ? "active" : "inactive"}`}/>
                ))}
                <IconButton onClick = {next} className = "arrow-right arrow">
                    <ArrowRight style = {{fontSize: "1.42rem"}}/>
                </IconButton>
            </div>
        </div>
    );
}

export default CourseSlider;