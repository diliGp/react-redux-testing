import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers';
import { middlewares } from '../store'

export const findByAttr = (wrapper, attrValue) => wrapper.find(`[data-test="${attrValue}"]`);

export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
}