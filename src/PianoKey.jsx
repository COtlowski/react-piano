import React from "react";
import "./_pianoKey.scss";

const OctaveMap = new Map([
    ["C4", 261.63],
    ["C#4", 277.18],
    ["D4", 293.66],
    ["D#4", 311.13],
    ["E4", 329.63],
    ["F4", 349.23],
    ["F#4", 369.99],
    ["G4", 392.00],
    ["G#4", 415.30],
    ["A4", 440.00],
    ["A#4", 466.16],
    ["B4", 493.88],
    ["C5", 523.25],
]);

class PianoKey extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            osc: this.setupOscillator(),
            wavetype: this.props.wavetype,
            currentlyPressed: false,
        };
    }

    setupOscillator() {
        const osc = this.props.context.createOscillator();
        osc.connect(this.props.mgn);
        osc.type = this.props.wavetype;
        osc.frequency.value = OctaveMap.get(this.props.pianoKey);

        return osc;
    }

    handleKeyPress(event) {
        if (event.key === this.props.keyName && !this.state.currentlyPressed) {
            this.state.osc.start();
            this.setState({
                currentlyPressed: true,
            });
        }
    }

    handleKeyRelease(event) {
        if (event.key === this.props.keyName && this.state.currentlyPressed) {
            this.state.osc.stop();
            this.setState({
                osc: this.setupOscillator(),
                currentlyPressed: false,
            });
        }
    }

    handleMousePress(event) {
        if (!this.state.currentlyPressed) {
            this.state.osc.start();
            this.setState({
                currentlyPressed: true,
            });
        }
    }

    handleMouseRelease(event) {
        if (this.state.currentlyPressed) {
            this.state.osc.stop();
            this.setState({
                osc: this.setupOscillator(),
                currentlyPressed: false,
            });
        }
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress.bind(this), false);
        document.addEventListener("keyup", this.handleKeyRelease.bind(this), false);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyPress.bind(this), false);
        document.removeEventListener("keyup", this.handleKeyRelease.bind(this), false);
    }

    render() {
        const fullName = this.props.pianoKey.replace("#", "Sharp");
        let className = "PianoKey " + fullName;
        if (this.state.currentlyPressed) className = className + " pressed"
        if (this.props.pianoKey.includes("#")) className = className + " sharp-key";

        return <button className={className}
            onMouseDown={e => this.handleMousePress(e)}
            onMouseUp={e => this.handleMouseRelease(e)}
            onMouseLeave={e => this.handleMouseRelease(e)}
        >{this.props.pianoKey}</button>;
    }
}

export default PianoKey;
