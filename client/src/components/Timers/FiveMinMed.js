import React, { Component } from 'react';
import './../../assets/css/style.css';
import requireAuth from './../requireAuth';

class FiveMinMed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 5,
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
    this.setState({ time: 5 })
  }

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = '0' + value;
    }
    return value;
  }

  render() {
    if (this.state.time === 0) {
      clearInterval(this.timer)
    }

    return (
      <div className='container'>
        <div className='sesh-timer'>
        <h1>00:{this.addLeadingZeros(this.state.time)}</h1>
          <div className='timerBtns'>
            <button className='timer-btn' onClick={this.startTimer}><span className="far fa-play-circle"></span></button>
            <button className='timer-btn' onClick={this.stopTimer}><span className="fas fa-stop"></span></button>
            <button className='timer-btn' onClick={this.resetTimer}><span className="fas fa-history"></span></button>
          </div> 
        </div>
        <br />
        <div className='description'>
          <h4>Five Minute Meditation</h4>
          <p>Duis laborum spare ribs exercitation pancetta buffalo t-bone rump brisket sint. Commodo ribeye consequat quis. Eiusmod frankfurter officia tongue proident laborum kielbasa minim. Do officia dolore cupim.</p>
        </div>
      </div>
    )
  }
};

export default requireAuth(FiveMinMed);