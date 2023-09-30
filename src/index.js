import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { combineReducers,createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import myReducer from './redux/reducers/reducer';
import mySaga from './redux/sagas/sagas';


const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({myReducer});
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

