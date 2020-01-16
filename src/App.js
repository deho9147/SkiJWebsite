import React from 'react';
import snowflakeicon2 from './snowflakeicon.png';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        Ski-J
        <img src={snowflakeicon2} width='100' height='100' flex='.2'></img>
        The best way to listen to music while you ski or ride
      </div>
      <div className="Center">
        <div className="Promo-Video">
          <iframe tite="promovid" src="https://www.youtube.com/embed/PNs68O5JSKg" 
          frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true">
        </iframe>
       </div>
        <div className="Star-Ratings">
          <p> Star ratings</p>
        </div>
      </div>
      <div className="Reviews">
        <p>reviews here</p>
      </div>
    </div>
  );
}

export default App;
