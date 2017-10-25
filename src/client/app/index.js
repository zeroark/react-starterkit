import React from 'react';
import {render} from 'react-dom';
import './style.scss';
import FruitsList from './components/FruitsList/FruitsList.jsx';
import Fruit from './components/Fruit/Fruit.jsx';

class App extends React.Component {
  render () {
    return (
        <div>
            <p>Choose a fruit to see its benefits:</p>
            <FruitsList />
        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));