import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../helpers/helpers';
import PosterGridMovies from '../shared/posterGridMovie/PosterGridMovies';
import SlideShow from '../shared/slideShow/SlideShow';

const HomeScreen = () => {

    const [movies, setMovies] = useState([]);
    const [moviesPosterGrid, setMoviesPosterGrid] = useState([]);
    const [page, setPage] = useState(1);

    const getMoviesInit = () => {
        fetch(`${BASE_URL}&page=1}`)
            .then(res => res.json())
            .then(({ results }) => {
                console.log(results)
                setMovies(p => [...p, ...results]);
                setMoviesPosterGrid(p => [...p, ...results]);
                setPage(p => p + 1);
            });
    }

    const getMoviesPosterGrid = () => {
        fetch(`${BASE_URL}&page=${page}`)
            .then(res => res.json())
            .then(({ results }) => {
                setMoviesPosterGrid(p => [...p, ...results]);
                setPage(p => p + 1);
            });
    }

    useEffect(() => {
        getMoviesInit();
    }, []);

    return (
        <>
            <header>
                <h1>En cartelera</h1>
            </header>
            <hr />
            {movies.length > 0 &&
                <>
                    <section className="row">
                        <div className="col">
                            <SlideShow movies={movies} />
                        </div>
                    </section>
                    <section className="mt-5">
                        <h2>Películas</h2>
                        <hr />
                        <PosterGridMovies moviesList={moviesPosterGrid} />
                    </section>
                    <div className="col-8 mx-auto mt-5 mb-5">
                        <button onClick={getMoviesPosterGrid} className="btn btn-primary btn-block">Cargar más</button>
                    </div>
                </>
            }
        </>
    )
}

export default HomeScreen
