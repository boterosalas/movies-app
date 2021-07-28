import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import Footer from '../../../../components/shared/footer/Footer';


describe('Test on <Footer />',()=>{

    test('Should display the component correctly', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('footer').text()).toContain('MoviesApp');
    });

    
})