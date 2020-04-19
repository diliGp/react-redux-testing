import { actionTypes } from '../actions/counter';

const initialState = {
    count: 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.increment:
            return state = {
                ...state,
                count: state.count + action.payload.amount
            };
        case actionTypes.decrement:
            return state = {
                ...state,
                count: state.count - action.payload.amount
            };
        default:
            break;
    }
    return state;
}

export { counterReducer };