import React from "react";

class Dropdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = { value: this.props.wavetype }
    }

    handleChange(e) {
        this.props.onWavetypeChange(e.target.value);
    }

    render() {
        return <select value={this.props.wavetype} onChange={this.handleChange.bind(this)}>
            <option value="sine">Sine</option>
            <option value="sawtooth">Sawtooth</option>
            <option value="square">Square</option>
            <option value="triangle">Triangle</option>
        </select>;
    }
}

export default Dropdown;
