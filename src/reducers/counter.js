import { actionTypes } from '../actions/counter';

const initialState = {
    count: 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.increment:
            state = {
                ...state,
                count: state.count + action.payload.amount
            };
            break;
        case actionTypes.decrement:
            state = {
                ...state,
                count: state.count - action.payload.amount
            };
            break;
        default:
            break;
    }
    return state;
}

export { counterReducer };