import React from 'react';
import Counter from './Counter';
import { shallow } from 'enzyme';
import { findByAttr, testStore } from '../testUtils/common';
import { incrementCounter, decrementCounter } from '../actions/counter';

const setup = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<Counter store={store} />).childAt(0).dive();
    return wrapper;
}

describe('Counter Container', () => {
    let wrapper;
    beforeEach(() => {
        const initialState = {
            counter: {
                count: 12
            }
        };

        wrapper = setup(initialState);
    })

    it('Should render without erros', () => {
        const counterContainer = findByAttr(wrapper, 'container-counter');
        expect(counterContainer.length).toBe(1);
    });

    it('Should render increment button', () => {
        const icrementButton = findByAttr(wrapper, 'button-inc');
        expect(icrementButton.length).toBe(1);
    });

    it('Should render decrement button', () => {
        const derementButton = findByAttr(wrapper, 'button-dec');
        derementButton.simulate('click');
        expect(derementButton.length).toBe(1);
    });

    it('Should test store changes', () => {
        const store = testStore();

        store.dispatch(incrementCounter(3));
        let state = store.getState();
        expect(state.counter.count).toEqual(3);
        
        store.dispatch(decrementCounter(3));
        state = store.getState();
        expect(state.counter.count).toEqual(0);
    });
});