import React, { useState } from 'react';
import CarouselImages from '../../assets/carouselImages.json'
import CarouselItem from '../CarouselItem/CarouselItem';

export default function Carousel() {

    console.log(CarouselImages)

    const [currentIndex, setCurrentIndex] = useState(0);
    const slidesContainerRef = React.createRef();

    const handleNextClick = () => {
        const slideWidth = slidesContainerRef.current.querySelector('.slide').clientWidth;
        slidesContainerRef.current.scrollLeft += slideWidth;
        setCurrentIndex(currentIndex + 1);
    };

    const handlePrevClick = () => {
        const slideWidth = slidesContainerRef.current.querySelector('.slide').clientWidth;
        slidesContainerRef.current.scrollLeft -= slideWidth;
        setCurrentIndex(currentIndex - 1);
    };

    return (
        <section className="slider-wrapper">
            <button className="slide-arrow" id="slide-arrow-prev" onClick={handlePrevClick}>
                &#8249;
            </button>
            <button className="slide-arrow" id="slide-arrow-next" onClick={handleNextClick}>
                &#8250;
            </button>
            <ul className="slides-container" id="slides-container" ref={slidesContainerRef}>

                {CarouselImages.map((item => (
                    <li className="slide"><CarouselItem item={item} /></li>
                )))}

            </ul>
        </section>
    );
}