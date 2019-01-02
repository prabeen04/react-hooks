import React from 'react';
import Navbar from '../Navbar';

// it('render Navbar without crashing', () => {
    describe('<Navbar />', () => {
        describe('render()', () => {
            test('renders the component', () => {
                const wrapper = shallow(<Navbar />);
                const component = wrapper.dive();

                expect(toJson(component)).toMatchSnapshot();
            });
        });
    });
// })