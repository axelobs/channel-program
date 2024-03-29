import React from 'react'
import styles from './slider.module.css'
import { Link } from 'react-router-dom'

import Carousel from 'react-bootstrap/Carousel'

export default function Slider({slides}){

    function getBtnTxt(event){
        let now = new Date()
        if(event.getTime() - now.getTime() <= 900000){
            return 'Watch Now'
        } else {
            return 'Subscribe Now'
        }
    }

    function getBtnPath(event, eventId){
        let now = new Date()
        if(event.getTime() - now.getTime() <= 900000){
            return `/event/${eventId}`
        } else {
            return `/subscribe?event=${eventId}`
        }
    }

    return(
        <div className={styles.sliderContainer}>
            <Carousel className={styles.slider} interval='50000'>
                {slides.map(slide => (
                    <Carousel.Item key={slide.imgAlt}>
                        <img
                            className="d-block w-100"
                            src={slide.url}
                            alt={slide.imgAlt}
                        />
                        <Carousel.Caption>
                            <h2 className={styles.slideTitle}>{slide.title}</h2>
                            <p className={styles.slideTxt}>{slide.description}</p>
                            <Link className={styles.slideBtn} to={getBtnPath(slide.event.date, slide.event.id)}>{getBtnTxt(slide.event.date)}</Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}