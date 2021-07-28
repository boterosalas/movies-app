import React from 'react';
import { mount } from 'enzyme';
import '@testing-library/jest-dom';
import Navbar from '../../../../components/shared/navbar/Navbar';
import { UserContext } from '../../../../routers/UserContext';
import { MemoryRouter, Router } from 'react-router-dom';


describe('Test on <Navbar />', () => {

    const historyMock = {
        push: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn()
    };

    const setUser = jest.fn();

    const wrapper = mount(
        <UserContext.Provider value={{ setUser }} >
            <MemoryRouter>
                <Router history={historyMock}>
                    <Navbar />
                </Router>
            </MemoryRouter>
        </UserContext.Provider>
    );

    test('Should display the component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Should redirect to a movie search when enter key be press', () => {
        const movie = 'avengers';
        wrapper.find('input').simulate('change', { target: { value: movie } });
        wrapper.find('form').simulate('submit');
        expect(historyMock.push).toHaveBeenCalledWith(`/search/${movie}`);
    });

    test('Should logout', () => {
        wrapper.find('#logout-button').simulate('click');
        expect(setUser).toHaveBeenCalledWith(null);
        expect(historyMock.push).toHaveBeenCalledWith('/login');
    });


})