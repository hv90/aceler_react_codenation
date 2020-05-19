import React, {Component} from 'react';
import Toggle from './components/toggle/Toggle';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="App">
                <Toggle/>
            </div>
        )
    }
}
