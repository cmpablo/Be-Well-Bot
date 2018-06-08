import React from 'react';
import '../assets/css/style.css';
import Card from '../components/Card';

const Dashboard = () => (
  <div className='container'>
    <div className='dashboard-content'>
      <h4>
        Your Dashboard
      </h4>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
);

export default Dashboard;