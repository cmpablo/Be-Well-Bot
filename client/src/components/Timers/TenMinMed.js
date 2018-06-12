import React, { Component } from 'react';
import './../../assets/css/style.css';
import requireAuth from './../requireAuth';

class TenMinMed extends Component {
  constructor(props) {
    super(props)
    this.state ={
      time: 10,
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
    this.setState({ time: 10 })
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
          <h4>Ten Minute Meditation</h4>
          <p>Meatball cupim tongue, frankfurter ut ham esse minim swine sunt lorem enim ball tip. Prosciutto tongue consequat leberkas pig dolore. Elit tail officia pancetta. Esse excepteur cupim qui hamburger ex fugiat commodo anim meatball cillum. Spare ribs magna do prosciutto, tenderloin veniam laboris strip steak consectetur capicola fatback filet mignon.</p>
        </div>
      </div>
    )
  }
};

export default requireAuth(TenMinMed);