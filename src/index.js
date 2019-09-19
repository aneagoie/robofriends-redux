import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'tachyons';
import {BrowserRouter, HashRouter} from 'react-router-dom'

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import store from "./redux/store";



ReactDOM.render(
  <Provider store={store}>
      <HashRouter>
          <App/>
      </HashRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
