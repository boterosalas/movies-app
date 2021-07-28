export const BASE_URL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=d43f4ea2ca33218a685f04dad0a79011&language=es-ES';

export const QUERY_URL = 'https://api.themoviedb.org/3/search/movie?api_key=d43f4ea2ca33218a685f04dad0a79011&language=es-ES';

export const getDetailUrl = (movieId) =>{
    return `https://api.themoviedb.org/3/movie/${movieId}?api_key=d43f4ea2ca33218a685f04dad0a79011&language=es-ES`;
}

export const getPosterUrl = (poster_path) => {
    return poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : '/assets/no-image.jpg';
}

export const extractCharacters = (text, limit) => {
    if (text.length <= limit){
        return text;
    } else {
        return `${text.substring(0, limit - 3)}...`;
    }
}

export const backGroundStyles = (backdrop_path) => {
    return {
        'backgroundSize': 'cover',
        'backgroundPosition': 'center',
        'backgroundImage': 'url(https://image.tmdb.org/t/p/w500' + backdrop_path + ')'
    }
}
