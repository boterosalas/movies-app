import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import { backGroundStyles, extractCharacters } from '../../../helpers/helpers';
import './SlideShow.css';

const SlideShow = ({ movies }) => {
    useEffect(() => {
        const swiper = new Swiper('.swiper-container', {
            // Optional parameters
            loop: true,

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }, []);


    return (
        <div className="swiper-container">
            {/* <!-- Additional required wrapper --> */}
            <div className="swiper-wrapper">
                {/* <!-- Slides --> */}
                {movies.map(movie => {
                    return (
                        <Link to={`/movie/${movie.id}`} key={movie.id} className="swiper-slide" style={backGroundStyles(movie.backdrop_path)}>
                            <div className="movie-description">
                                <h3>{movie.title}</h3>
                                <p>{extractCharacters(movie.overview, 130)}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
            {/* <!-- If we need navigation buttons --> */}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </div>
    )
}

export default SlideShow
