import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Navbar from '../Navbar';

describe('<Navbar />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const wrapper = shallow(<Navbar />);
            const component = wrapper.dive();

            expect(toJson(wrapper)).toMatchSnapshot();
        });
    });
});