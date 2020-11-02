// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Massages from './components/Massages/Massages';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <div className='body__wrapper'>
        <Header />
        <div className='main-content'>
          <div className='container__noPadding'>
            <Navbar />

            <Route path='/profile' component={Profile} />
            <Route path='/massages' component={Massages} />

          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
