


const HASH = 'bef66a1d3a4e2c2cb66189a30454c010';
const API_KEY = 'cb1d77ba3eb7c15f1280292708227913';
const PASS = `ts=1&apikey=${API_KEY}&hash=${HASH}`;
const URL_BASE = 'http://gateway.marvel.com/v1/public/characters';



export const getCharacters = (limit, offset) =>{
    return `${URL_BASE}?orderBy=name&limit=${limit}&offset=${offset}&${PASS}`;
}

export const getCharacterById = (characterId) =>{
    return `${URL_BASE}/${characterId}`;
}

export const getCharacterComicsById = (characterId) =>{
    return `${URL_BASE}/${characterId}/comics`;
}

export const getCharacterEventsById = (characterId) =>{
    return `${URL_BASE}/${characterId}/events`;
}

export const getCharacterSeriesById = (characterId) =>{
    return `${URL_BASE}/${characterId}/series`;
}

export const getCharacterStoriesById = (characterId) =>{
    return `${URL_BASE}/${characterId}/stories`;
}


