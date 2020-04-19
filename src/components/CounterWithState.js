import React, { Component } from 'react'

class CounterWithState extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    increment(amount) {
        this.setState({
            count: this.state.count + amount
        });
    }

    decrement(amount) {
        this.setState({
            count: this.state.count - amount
        });
    }

    render() {
        return (
            <div data-test="container-state-counter">
                <h1>Counter with State</h1>
                <section>
                    <h2>Current count: {this.state.count}</h2>
                    <div>
                        <button data-test="increment-btn" onClick={() => this.increment(1)}>+</button>
                        <button data-test="decrement-btn" onClick={() => this.decrement(1)}>-</button>
                    </div>
                </section>
            </div>
        )
    }
}

export default CounterWithState;
