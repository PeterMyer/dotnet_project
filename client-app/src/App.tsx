/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const  [activities, setActivities ] = useState<any>([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/activities")
    .then(response => {
      setActivities(response.data)
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <ul>
            {activities.map(( activity: any) => {
              return <li key={activity.id}>{activity.title}</li>
            })}
          </ul>
      </header>
    </div>
  );
}

export default App;
