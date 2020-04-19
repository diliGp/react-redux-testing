import React from 'react'
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from '../actions/counter';

const Counter = ({ count, incrementCounter, decrementCounter }) => {
    return (
        <section data-test="container-counter">
            <div>
                Current count is: {count}
            </div>
            <button onClick={() => incrementCounter(1)} data-test="button-inc">+</button>
            <button onClick={() => decrementCounter(1)} data-test="button-dec">-</button>
        </section>
    )
};

const mapStoreToProps = (store) => ({
    count: store.counter.count
});

const mapActionsToProps = {
    incrementCounter,
    decrementCounter
}

export default connect(mapStoreToProps, mapActionsToProps)(Counter)
