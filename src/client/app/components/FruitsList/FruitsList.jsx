import React from 'react';
import data from './data.json';
import Fruit from '../Fruit/Fruit.jsx';
import './fruits-list.scss';

class FruitsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {fruits : data};
  }

  render() {
    return (
      <div className="fruitlist">
        {this.state.fruits.map(function(fruit, index){
            return (
                <Fruit key={index}
                       image={`./app/components/FruitsList/${fruit.name}.svg`}
                       name={fruit.name} />
            )
        })}
      </div>
    );
  }

}

export default FruitsList;