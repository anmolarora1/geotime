import React from 'react';
import logo from './logo.svg';
import './App.css';
import MapContainer from './MapContainer'

function App() {
  return (
    <div className="App">
      <MapContainer patientId={'1234567'}/>
    </div>
  );
}

export default App;