import React, {Component} from 'react';

export default class CounterClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    inc = () => {
        const {count} = this.state;
        this.setState({count: count + 1})
    }
    
    dec = () => {
        this.setState({count: this.state.count - 1})
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.inc}>Inc</button>
                <button onClick={this.dec}>Dec</button>
            </div>
        )
    }
}