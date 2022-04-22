import React from 'react';
import {  Route} from 'react-router-dom';
import Popup from './pages/Popup';
import Home from './pages/Home';
import Account from './pages/Account';
import Favorites from './pages/Favorites';
import Signin from './pages/Signin';

const App = () => {
  return (
    <div className='container'>
        <Route path='/' exact component={Home} />
        <Route path='/popup' component={Popup} />
        <Route path='/account' exact component={Account} />
        <Route path='/favorites' exact component={Favorites} />
        <Route path='/signin' exact component={Signin} />
    </div>
  );
};

export default App;



