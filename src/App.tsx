import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppZoomFrame from './app-zoom/AppZoomFrame';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppZoomFrame name='test' id={123}></AppZoomFrame>
      </header>
    </div>
  );
}

export default App;
