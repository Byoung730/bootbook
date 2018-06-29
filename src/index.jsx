import 'babel-polyfill';
import 'raf/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import RootContainer from './containers/RootContainer';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducers from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
);

const App = (
    <Provider store={store}>
        <RootContainer />
    </Provider>
);

console.log(process.env.GITHUB_TOKEN);

const mountPoint = document.getElementById('app');

ReactDOM.render(App, mountPoint);
