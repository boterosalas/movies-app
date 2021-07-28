import React from 'react';
import { mount } from 'enzyme';
import '@testing-library/jest-dom';
import PosterGridMovies from '../../../../components/shared/posterGridMovie/PosterGridMovies';
import { MemoryRouter } from 'react-router-dom';


describe('Test on <PosterGridMovies />', () => {

    const moviesList = [
        {
            id: 1,
            poster_path: '',
            title: '',
            vote_average: ''
        },
        {
            id: 2,
            poster_path: '',
            title: '',
            vote_average: ''
        },
        {
            id: 3,
            poster_path: '',
            title: '',
            vote_average: ''
        },
    ]

    const wrapper = mount(
        <MemoryRouter>
            <PosterGridMovies moviesList={moviesList} />
        </MemoryRouter>
    );

    test('Should display the component correctly', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('Link').length).toBe(moviesList.length);
        expect(wrapper.find('img').length).toBe(moviesList.length);
        expect(wrapper.find('.movie-title').length).toBe(moviesList.length);
    });

    test('Should coincide the title elements with the text on title tags', () => {
        wrapper.find('.movie-title').forEach((title, idx) => {
            expect(title.text()).toBe(moviesList[idx].title);
        });
    });


})