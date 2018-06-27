import 'babel-polyfill';
import 'raf/polyfill';

import React            from 'react';
import ReactDOM         from 'react-dom';

import RootComponent    from './components/RootComponent';


const mountPoint = document.getElementById('app');

ReactDOM.render(<RootComponent />, mountPoint);
