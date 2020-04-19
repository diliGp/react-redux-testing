import React from 'react';
import Counter from './Counter';
import { shallow } from 'enzyme';
import { createStore } from 'redux';
import { rootReducer } from '../reducers';
import { findByAttr } from '../testUtils/common';


const setup = (props = {}, initialState = {}) => {
    const store = createStore(rootReducer, initialState);
    const wrapper = shallow(<Counter store={store} />).childAt(0).dive();
    console.log(wrapper)
    return wrapper;
}

describe('Counter Container', () => {
    const props = {
        count: 0
    }
    const initialState = {}
    it('Should render without erros', () => {
        const wrapper = setup({}, initialState);
        const counterContainer = findByAttr(wrapper, 'container-counter')
        expect(counterContainer.length).toBe(1);
    });

    it('Should test store changes', () => {
        const wrapper = setup({}, initialState);
        const icrementButton = findByAttr(wrapper, 'button-inc');
        expect(icrementButton.length).toBe(1);
        
        icrementButton.simulate('click')
        console.log(wrapper.prop('count'))
    })
});