import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const sounds = [
  { id: "cymbals", letter: "Q", src: "http://www.synthmania.com/Boss%20DR-220A/Audio/Boss%20DR-220A%20WAV%20samples/Closed%20Hi-hat.wav"},
  { id: "snare", letter: "W", src: "http://www.denhaku.com/r_box/sr16/sr16sd/lochrome.wav"},
  { id: "triangle", letter: "E", src: "http://www.utc.fr/si28/ProjetsUpload/P2006_si28p004/flash_puzzle/sons/rush/horizon.wav"},
  { id: "bongo", letter: "A", src: "http://dight310.byu.edu/media/audio/FreeLoops.com/4/4/Korg%20Bongo%20Low-2496-Free-Loops.com.mp3"},
  { id: "beat", letter: "S", src: "http://cd.textfiles.com/10000soundssongs/WAV/DRUMS.WAV"},
  { id: "drumroll", letter: "D", src: "http://sprott.physics.wisc.edu/wop/sounds/Drumroll-1.wav"},
  { id: "kick-bass", letter: "Z", src: "http://dight310.byu.edu/media/audio/FreeLoops.com/4/4/Hard%20House%20Kick%2026-9441-Free-Loops.com.mp3"},
  { id: "bass-drum", letter: "X", src: "http://www.denhaku.com/r_box/sr16/sr16bd/garagekk.wav"},
  { id: "bass-drum-2", letter: "C", src: "http://dight310.byu.edu/media/audio/FreeLoops.com/1/1/Bass%20Drum%203-9177-Free-Loops.com.mp3"}
]

class DrumPad extends Component {

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = e => {
    if (e.keyCode === this.props.letter.charCodeAt()) {
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.handleDisplay(this.props.id);
    }
  }

  handleClick = () => {
    this.audio.play();
    this.audio.currentTime = 0;
    this.props.handleDisplay(this.props.id);
  }

  render() {
    return( 
      <div 
        className="drum-pad" 
        id={this.props.id} 
        onClick={this.handleClick}
      >
      {this.props.letter}
      <audio 
        ref={ref => this.audio = ref}
        src={this.props.src} 
        className="clip" 
        id={this.props.letter}>
      </audio>
      </div>
    )
  }
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      display: ''
    }
  }

  handleDisplay = display => this.setState({display: display})

  render() {
    return (
      <div id="drum-machine">
        <div id="display">{this.state.display}</div>
        <div id="drumkit">
        {sounds.map(s => (
          <DrumPad 
            id={s.id}
            letter={s.letter}
            src={s.src}
            handleDisplay={this.handleDisplay}
          />
        ))};
        </div>
      </div>
    );
  }
}

export default App;
