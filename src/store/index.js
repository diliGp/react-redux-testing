import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers';

const middlewares = [];
const createStoreWithMiddlewares = applyMiddleware(...middlewares)(createStore)

export const store = createStoreWithMiddlewares(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)