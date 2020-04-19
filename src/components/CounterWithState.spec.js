import React from 'react';
import { shallow } from "enzyme";
import CounterWithState from "./CounterWithState";
import { findByAttr } from '../testUtils/common';
import renderer from 'react-test-renderer';

describe('Counter with State', () => {
    let component;
    beforeEach(() => {
        component = shallow(<CounterWithState />);
    });

    it('Should capture snapshot to render without error', () => {
        const tree = renderer.create(<CounterWithState />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Should render without error', () => {
        const container = findByAttr(component, 'container-state-counter');
        expect(container.length).toBe(1);
    });

    it('Should be having initial count in state', () => {
        const initialState = component.state();
        expect(initialState.count).toBe(0);
    });

    it('Should contain incrementer', () => {
        const incrementer = findByAttr(component, 'increment-btn');
        expect(incrementer.length).toBe(1);
    });
    
    it('Should contain decrementer', () => {
        const decrementer = findByAttr(component, 'decrement-btn');
        expect(decrementer.length).toBe(1);
    });
    
    it('Should increase counter', () => {
        const incrementer = findByAttr(component, 'increment-btn');
        incrementer.simulate('click');
        const changedState = component.state();
        expect(changedState.count).toBe(1);
    });
    
    it('Should decrease counter', () => {
        const incrementer = findByAttr(component, 'decrement-btn');
        incrementer.simulate('click');
        const changedState = component.state();
        expect(changedState.count).toBe(-1);
    });

});