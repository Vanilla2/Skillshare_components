import React, { useEffect, useRef, useState } from 'react'
import {IconButton} from "@material-ui/core";
import ArrowRight from '@material-ui/icons/ArrowForwardIos';
import ArrowLeft from '@material-ui/icons/ArrowBackIos';

export interface Props {
    [key: string]: any
}

const CourseCardCarousel = ({children}: Props) => {
    const mainContainer = useRef <any> ();
    const slide = useRef <any> ();
    const [counter, setCounter] = useState(0);

    const left = () => {
        if (counter * 3 <= 0)
            return;
        setCounter(counter - 3);
    }

    const right = () => {
        if (counter * 3 >= children.length)
            return;
        setCounter(counter + 3);
    }

    return (
        <div ref = {mainContainer} className = "card-carousel">
            <IconButton disabled = {counter * 3 <= 0} onClick = {left} className = "card-carousel-arrow arrow-left">
                <ArrowLeft/>
            </IconButton>
            <div className = "card-carousel-window">
                <div className="card-carousel-content" style = {{transform: `translateX(${-100 / 3 * counter}%)`}}>
                {children.map((x: any, index: number) => (
                    <div key = {index} className="card-carousel-item">
                        {x}
                    </div>
                ))}
                </div>
            </div>
            <IconButton disabled = {counter * 3 >= children.length} onClick = {right} className = "card-carousel-arrow arrow-right">
                <ArrowRight/>
            </IconButton>
        </div>
    );
}

export default CourseCardCarousel;