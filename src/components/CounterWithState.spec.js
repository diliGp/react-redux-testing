import React from 'react';
import { shallow } from "enzyme";
import CounterWithState from "./CounterWithState";
import { findByAttr } from '../testUtils/common';

describe('Counter with State', () => {

    let component;
    beforeEach(() => {
        component = shallow(<CounterWithState />);
    })

    it('Should render without error', () => {
        const container = findByAttr(component, 'container-state-counter');
        expect(container.length).toBe(1);
    });

    it('Should capture snapshot to render without error', () => {
        expect(component).toMatchSnapshot();
    });

});