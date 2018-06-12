import React, { Component } from 'react';
import './../../assets/css/style.css';
import requireAuth from './../requireAuth';

class TenMinYoga extends Component {
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
    clearInterval(this.timer)
    e.preventDefault();
    this.setState({isOn: false})
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
          <h4>Ten Minute Yoga</h4>
          <p>Cow in chicken, andouille ball tip sausage aliqua. Proident tenderloin commodo pork belly esse frankfurter consectetur short loin bresaola. Rump pork belly proident shankle, magna tenderloin frankfurter sunt.</p>
        </div>
      </div>
    )
  }
};

export default requireAuth(TenMinYoga);