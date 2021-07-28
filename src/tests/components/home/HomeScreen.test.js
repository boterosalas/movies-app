import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import HomeScreen from '../../../components/home/HomeScreen';

describe('Test on <HomeScreen />', () => {

    test('Should display the component correctly', () => {
        const wrapper = shallow(<HomeScreen />);
        expect(wrapper).toMatchSnapshot();
    });


})