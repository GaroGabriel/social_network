// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Massages from './components/Massages/Massages';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

// let profileComp = () => <Profile />
// let massageComp = () => <Massages />

function App(props) {


  return (

    <div className='body__wrapper'>
      <Header />
      <div className='main-content'>
        <div className='container__noPadding'>
          <Navbar friensArr={props.state.sidebar.friensArr} />

          <Route path='/profile' render={
            () => <Profile
              post={props.state.profile.post} />} />

          <Route path='/massages' render={
            () => <Massages
              dialogeArr={props.state.massanger.dialogeArr}
              massageArr={props.state.massanger.massageArr} />} />

        </div>
      </div>
    </div>

  );
}

export default App;
