import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './Component.jsx';
import './style.scss';

class App extends React.Component {
  render () {
    return (
        <div>
            <p> Hello React!</p>
            <AwesomeComponent />
        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));