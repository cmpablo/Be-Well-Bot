import React, { Component } from 'react';
import './../../assets/css/style.css';

class FifteenTimer extends Component {
  constructor(props) {
    super(props)
    this.state ={
      time: 15,
      isOn: false
    }
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
  }

  // ===== timer decrements 1 sec on start =====
  startTimer(e) {
    e.preventDefault();
    this.setState({isOn: true})
    this.timer = setInterval(() => this.setState({
      time: this.state.time - 1
    }), 1000)
  }

  stopTimer(e) {
    e.preventDefault();
    this.setState({isOn: false})
    clearInterval(this.timer)
  }

  resetTimer() {
    this.setState({ time: 15 })
  }

  render() {

    return (
      <div className='container'>
        <div className='sesh-timer'>
          <h1>{this.state.time}</h1>
          <p>seconds remaining</p>
          <button className='timer-btn' onClick={this.startTimer}><span class="far fa-play-circle"></span> Start</button>

          <button className='timer-btn' onClick={this.stopTimer}><span class="fas fa-stop"></span> Stop</button>

          <button className='timer-btn' onClick={this.resetTimer}><span class="fas fa-history"></span> Reset</button>
        </div>
      </div>
    )
  }
};

export default FifteenTimer;