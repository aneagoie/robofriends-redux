import { shallow, mount, render } from 'enzyme';
import React from 'react';
import CounterButton from '../components/CounterButton';

// npm test -- --coverage


describe("CounterButton", ()=>{
    it("CounterButton SnapShot", () => {
        expect(shallow(<CounterButton />)).toMatchSnapshot();
    });

    it("CounterButton State", () => {
        const wrapperMount = mount(<CounterButton />);

        wrapperMount.find('button').simulate('click');
        expect(wrapperMount.props()).toEqual(1);


    });
} );