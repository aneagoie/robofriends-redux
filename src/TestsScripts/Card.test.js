import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Card from '../components/Card';

// npm test -- --coverage


describe("Card", ()=>{
    it("Card SnapShot", () => {
        expect(shallow(<Card />)).toMatchSnapshot();
    });
} );



