import { counterReducer } from "./counter";
import { actionTypes } from "../actions/counter";

describe('Counter Reducer', () => {
    it('Should return default state when no action type is passes', () => {
        const output = counterReducer(undefined, { type: '' });
        const expectedObj = {
            count: 0
        };
        expect(output).toEqual(expectedObj);
    });
    
    it('Should return incremented state when incrementation action type is passes', () => {
        const output = counterReducer(undefined, { 
            type: actionTypes.increment,
            payload: {
                amount: 9
            }
        });

        const expectedObj = {
            count: 9
        };
        expect(output).toEqual(expectedObj);
    });

    it('Should return decrementated state when decrementation action type is passes', () => {
        const output = counterReducer(undefined, { 
            type: actionTypes.decrement,
            payload: {
                amount: 5
            }
        });

        const expectedObj = {
            count: -5
        };
        expect(output).toEqual(expectedObj);
    });
});