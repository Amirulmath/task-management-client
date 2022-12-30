import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Banner1 from '../../../assets/images/exercise.jpg';
import Banner2 from '../../../assets/images/study.jpg';
import Banner3 from '../../../assets/images/class.jpg';
import Banner4 from '../../../assets/images/playing.jpg';
import Banner5 from '../../../assets/images/family.jpg';

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Banner1}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Banner2}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Banner3}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Banner4}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Banner5}
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;