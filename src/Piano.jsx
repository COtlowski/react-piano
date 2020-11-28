import React from "react";
import PianoKey from "./PianoKey";
import Dropdown from "./Dropdown";
import "./_piano.scss";

class Piano extends React.Component {
    constructor(props) {
        super(props);
        const audioContext = new window.AudioContext();
        const masterGainNode = audioContext.createGain();
        masterGainNode.connect(audioContext.destination);
        masterGainNode.gain.value = 0.5;

        this.state = {
            audioContext: audioContext,
            masterGainNode: masterGainNode,
            wavetype: "sine",
        };
    }

    onWavetypeChange(wavetype) {
        this.setState({ wavetype: wavetype })
    }

    render() {
        return <div className="Piano">
            <PianoKey pianoKey="C4" keyName="a" context={this.state.audioContext} mgn={this.state.masterGainNode} wavetype={this.state.wavetype} />
            <PianoKey pianoKey="C#4" keyName="w" context={this.state.audioContext} mgn={this.state.masterGainNode} wavetype={this.state.wavetype} />
            <PianoKey pianoKey="D4" keyName="s" context={this.state.audioContext} mgn={this.state.masterGainNode} wavetype={this.state.wavetype} />
            <PianoKey pianoKey="D#4" keyName="e" context={this.state.audioContext} mgn={this.state.masterGainNode} wavetype={this.state.wavetype} />
            <PianoKey pianoKey="E4" keyName="d" context={this.state.audioContext} mgn={this.state.masterGainNode} wavetype={this.state.wavetype} />
            <PianoKey pianoKey="F4" keyName="f" context={this.state.audioContext} mgn={this.state.masterGainNode} wavetype={this.state.wavetype} />
            <PianoKey pianoKey="F#4" keyName="t" context={this.state.audioContext} mgn={this.state.masterGainNode} wavetype={this.state.wavetype} />
            <PianoKey pianoKey="G4" keyName="g" context={this.state.audioContext} mgn={this.state.masterGainNode} wavetype={this.state.wavetype} />
            <PianoKey pianoKey="G#4" keyName="y" context={this.state.audioContext} mgn={this.state.masterGainNode} wavetype={this.state.wavetype} />
            <PianoKey pianoKey="A4" keyName="h" context={this.state.audioContext} mgn={this.state.masterGainNode} wavetype={this.state.wavetype} />
            <PianoKey pianoKey="A#4" keyName="u" context={this.state.audioContext} mgn={this.state.masterGainNode} wavetype={this.state.wavetype} />
            <PianoKey pianoKey="B4" keyName="j" context={this.state.audioContext} mgn={this.state.masterGainNode} wavetype={this.state.wavetype} />
            <PianoKey pianoKey="C5" keyName="k" context={this.state.audioContext} mgn={this.state.masterGainNode} wavetype={this.state.wavetype} />
            <Dropdown wavetype={this.state.wavetype} onWavetypeChange={this.onWavetypeChange.bind(this)}/>
        </div>;
    }
}

export default Piano;
