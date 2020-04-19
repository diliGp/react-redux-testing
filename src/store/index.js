import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers';
import ReduxThunk from 'redux-thunk';


export const middlewares = [ReduxThunk];
const createStoreWithMiddlewares = applyMiddleware(...middlewares)(createStore)

export const store = createStoreWithMiddlewares(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)