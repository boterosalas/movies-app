import React from 'react'
import { Link } from 'react-router-dom';
import { getPosterUrl } from '../../helpers/helpers';
import './PosterGridMovies.css';

const PosterGridMovies = ({ moviesList }) => {

    return (
        <div className="row">
            {
                moviesList.map(movie => {
                    return (
                        <div key={movie.id} className="col-6 col-sm-4 col-md-3 mb-4">
                            <Link to={`/movie/${movie.id}`}>
                                <img src={getPosterUrl(movie.poster_path)} alt={movie.title} className="img-fluid poster" />
                            </Link>
                            <div>
                                <p className="text-warning text-right m-0 w-100">
                                    {movie.vote_average}
                                </p>
                                <h3 className="movie-title">{movie.title}</h3>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PosterGridMovies
