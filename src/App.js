// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Massages from './components/Massages/Massages';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className='body__wrapper'>
      <Header />
      <div className='main-content'>
        <div className='container__noPadding'>
          <Navbar />
          <Profile />
          {/* <Massages /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
