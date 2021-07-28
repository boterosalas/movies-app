import React from 'react';
import { mount } from 'enzyme';
import '@testing-library/jest-dom';
import DashboardRoute from '../../routers/DashboardRoute';
import { UserContext } from '../../routers/UserContext';
import { MemoryRouter, Router } from 'react-router-dom';


describe('Test on <DashboardRoute />', () => {

    const historyMock = {
        push: jest.fn(),
        location: {},
        listen: jest.fn(),
        replace: jest.fn()
    };

    const user = {
        name: 'David',
        email: 'boterosalas@gmail.com'
    };

    const wrapper = mount(
        <UserContext.Provider value={{ user }} >
            <MemoryRouter>
                <DashboardRoute />
            </MemoryRouter>
        </UserContext.Provider>
    );

    test('Should display the component correctly', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('Navbar').exists()).toBe(true);
        expect(wrapper.find('main').exists()).toBe(true);
        expect(wrapper.find('footer').exists()).toBe(true);
    });

    test('Should not display the component when there is no user', () => {
        const wrapper = mount(
            <UserContext.Provider value={{}} >
                <MemoryRouter>
                    <Router history={historyMock}>
                        <DashboardRoute />
                    </Router>
                </MemoryRouter>
            </UserContext.Provider>
        )
        expect(wrapper.find('Navbar').exists()).toBe(false);
        expect(wrapper.find('main').exists()).toBe(false);
        expect(historyMock.replace).toHaveBeenCalledWith('/login');
    });

})