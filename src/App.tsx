import React from 'react';
import logo from './logo.svg';
import './App.css';
import FrontPage from './FrontPage';
import NavBar from './NavBar';

function App() {
  return (
    <div>
    <div className="header-container">
      <NavBar />
    </div>
    <FrontPage /> 
  </div>
  );
}

export default App;
