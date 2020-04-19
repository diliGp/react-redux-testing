const actionTypes = {
    increment: "INCREMENT_COUNTER",
    decrement: "DECREMENT_COUNTER"
}

const incrementCounter = (amount) => ({
    type: actionTypes.increment,
    payload: {
        amount
    }
});


const decrementCounter = (amount) => ({
    type: actionTypes.decrement,
    payload: {
        amount
    }
});

export {
    actionTypes,
    incrementCounter,
    decrementCounter
}