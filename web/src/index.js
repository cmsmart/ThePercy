import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-84813849-5')

ReactDOM.render(<App />, document.getElementById('root'));
