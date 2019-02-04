import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './config/configureStore';
import Firebase, { FirebaseContext } from './components/Firebase';
import App from './App';
import * as serviceWorker from './config/serviceWorker';
import './styles/index.css';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <Provider store={store}>
      <App />
    </Provider>
  </FirebaseContext.Provider>,
  document.getElementById('root') as HTMLElement
);

serviceWorker.register();
