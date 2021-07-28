import React from 'react';
import { mount } from 'enzyme';
import '@testing-library/jest-dom';
import LoginScreen from '../../../components/login/LoginScreen';
import { MemoryRouter, Router } from 'react-router-dom';
import { UserContext } from '../../../routers/UserContext';


describe('Test on <LoginScreen />', () => {

    const setUser = jest.fn();

    const user = {
        name: 'David',
        email: 'boterosalas@gmail.com'
    };

    const historyMock = {
        push: jest.fn(),
        location: {},
        listen: jest.fn(),
        replace: jest.fn()
    };

    const wrapper = mount(
        <UserContext.Provider value={{ setUser }} >
            <MemoryRouter>
                <Router history={historyMock}>
                    <LoginScreen />
                </Router>
            </MemoryRouter>
        </UserContext.Provider>
    );


    test('Should display the component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Should redirect to <HomeScreen /> and set User', () => {
        wrapper.find('#inputName').simulate('change', { target: { name: 'name', value: user.name } });
        wrapper.find('#inputEmail').simulate('change', { target: { name: 'email', value: user.email } });
        wrapper.find('form').simulate('submit');
        expect(setUser).toHaveBeenCalledWith(user);
        expect(historyMock.replace).toHaveBeenCalledWith('/')
    });

})