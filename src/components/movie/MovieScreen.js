import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { getDetailUrl, getPosterUrl } from '../../helpers/helpers';
import './MovieScreen.css';

const MovieScreen = () => {
    let history = useHistory();

    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    let { id } = useParams();
    useEffect(() => {
        fetch(getDetailUrl(id))
            .then(res => res.json())
            .then(data => {
                if (data.success === false) {
                    return history.replace('/');
                } else {
                    setMovie(data);
                    setLoading(false);
                }
            })
            .catch(err => history.replace('/'))
    }, [id, history])
    return (
        <div>
            {
                !loading &&
                <>
                    <div className="row">
                        <div className="col-sm-6">
                            <img src={getPosterUrl(movie.poster_path)} alt={movie.title} className="img-thumbnail" />
                        </div>
                        <div className="col-sm-6">
                            <h1>{movie.title}</h1>
                            <p className="m-0">{movie.tagline}</p>
                            <hr className="background-white" />
                            <p className="m-0 text-warning">{movie.vote_average}</p>
                            <p className="m-0">Géneros:</p>
                            <p className="m-0">{movie.genres.map(({ name, id }, idx) => {
                                return (<span key={id}>{name}{movie.genres.length === idx + 1 ? '' : ', '}</span>)
                            })}</p>
                            {movie.homepage !== '' &&
                                <a className="underline" target="_blank" rel="noreferrer" href={movie.homepage}>Página principal</a>
                            }
                        </div>
                    </div>
                    <h2 className="mt-4">Sinopsis</h2>
                    <p>{movie.overview}</p>
                </>
            }
        </div>
    )
}

export default MovieScreen
