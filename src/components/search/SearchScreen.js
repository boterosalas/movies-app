import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { QUERY_URL } from '../../helpers/helpers';
import PosterGridMovies from '../shared/posterGridMovie/PosterGridMovies';

const SearchScreen = () => {
    let { text } = useParams();
    const [moviesPosterGrid, setMoviesPosterGrid] = useState([]);
    const [page, setPage] = useState(1);

    const getMoviesPosterGrid = () => {
        fetch(`${QUERY_URL}&query=${text}&page=${page}&include_adult=false`)
            .then(res => res.json())
            .then(({ results }) => {
                setMoviesPosterGrid(p => [...p, ...results]);
                setPage(p => p + 1);
            });
    }

    useEffect(() => {
        fetch(`${QUERY_URL}&query=${text}&page=1&include_adult=false`)
            .then(res => res.json())
            .then(({ results }) => {
                setMoviesPosterGrid(p => [...results]);
                setPage(p => p + 1);
            })
    }, [text])



    return (
        <>
            <header>
                <h1>Resultados por: <small>{text}</small></h1>
            </header>
            <hr />
            {moviesPosterGrid.length > 0 &&
                <>
                    <section className="mt-5">
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

export default SearchScreen
