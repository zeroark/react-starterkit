import React from 'react';
import './fruit.scss';

class FruitDetail extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="fruit">
        <h1>{props.id}</h1>
        <img src={props.image} />
        <p>{props.decription}</p>
      </div>
    );
  }

}

export default FruitDetail;