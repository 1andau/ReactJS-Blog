import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './scss/app.scss';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import { RecoilRoot } from "recoil"

ReactDOM.render(
  
  <Provider store={store}>
      <Router>
<RecoilRoot>
<App />
</RecoilRoot>
      </Router>
  </Provider>,

  document.getElementById('root'),
);
