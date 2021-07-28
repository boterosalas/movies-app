import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import AppRouter from '../../routers/AppRouter';


describe('Test on <AppRouter />',()=>{

    test('Should display the component correctly', () => {
        const wrapper = shallow(<AppRouter />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('BrowserRouter').exists()).toBe(true);
        expect(wrapper.find('Route').length).toBe(2);
    });
    
})