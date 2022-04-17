import React from 'react';
import {  Route, Switch } from 'react-router-dom';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Account from './pages/Account';
import Favorites from './pages/Favorites';
import Header from './components/Header';
import Write from './pages/Write';

const App = () => {
  return (
    <div className='container'>
              <Header/>

      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/blog/:id' component={Blog} />
        <Route path='/account' exact component={Account} />
        <Route path='/favorites' exact component={Favorites} />
        <Route path='/write' exact component={Write} />

      </Switch>
    </div>
  );
};

export default App;
