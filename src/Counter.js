import React from "react";

class Counter extends React.Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    increament = () => {
        this.setState({ count: this.state.count + 1 });
    }

    decreament = () => {
        if (this.state.count > 0)
            this.setState({ count: this.state.count - 1 });
    }

    render() {

        return <>
            <div className="container text-center">
                <h1>{this.state.count}</h1>
                <button onClick={this.increament} className="btn btn-warning mx-2">+</button>
                <button onClick={this.decreament} className="btn btn-success mx-2">-</button>
            </div>
        </>
    }
}

export default Counter;