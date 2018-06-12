import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../assets/css/style.css';
import Card from '../components/Card';
import requireAuth from './../components/requireAuth';

const StyledLink = styled(Link)`
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

class Dashboard extends Component {
  state = {
    sessions: [
      { date: '06-10-18', time: '4:17pm', type: 'meditation 5min'},
      { date: '06-08-18', time: '2:35pm', type: 'yoga 10min'},
      { date: '06-05-18', time: '10:10am', type: 'meditation 5min'},
      { date: '06-04-18', time: '11:55am', type: 'yoga 5min'},
      { date: '06-04-18', time: '4:33pm', type: 'meditation 10min'},
      { date: '06-01-18', time: '11:07am', type: 'yoga 15min'}
    ]
  }

  render() {
    const sessions = this.state.sessions;

    return (
      <div className='container'>
        <div className='dashboard-content'>
          <h4>
            Your Dashboard
          </h4>
          <StyledLink to='/fivemed'><Card date={sessions[0].date} time={sessions[0].time} type={sessions[0].type}/></StyledLink>
          <StyledLink to='/tenyoga'><Card date={sessions[1].date} time={sessions[1].time} type={sessions[1].type}/></StyledLink>
          <StyledLink to='/fivemed'><Card date={sessions[2].date} time={sessions[2].time} type={sessions[2].type}/></StyledLink>
          <StyledLink to='fiveyoga'><Card date={sessions[3].date} time={sessions[3].time} type={sessions[3].type}/></StyledLink>
          <StyledLink to='/tenyoga'><Card date={sessions[4].date} time={sessions[4].time} type={sessions[4].type}/></StyledLink>
          <StyledLink to='/fifteenyoga'><Card date={sessions[5].date} time={sessions[5].time} type={sessions[5].type}/></StyledLink>
        </div>
      </div>
    )
  }
};

export default requireAuth(Dashboard);