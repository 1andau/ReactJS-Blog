import React from 'react';
import {  Route} from 'react-router-dom';
import Popup from './pages/Popup';
import Home from './pages/Home';
import Account from './pages/Account';
import Favorites from './pages/Favorites';
import Header from './components/Header';
import Write from './pages/Write';

const App = () => {
  return (
    <div className='container'>
        <Header/>
        <Route path='/' exact component={Home} />
        <Route path='/popup' component={Popup} />
        <Route path='/account' exact component={Account} />
        <Route path='/favorites' exact component={Favorites} />
        <Route path='/write' exact component={Write} />
    </div>
  );
};

export default App;



