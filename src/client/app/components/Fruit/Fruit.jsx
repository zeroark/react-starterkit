import React from 'react';
import './fruit.scss';

class Fruit extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="fruit">
        <img className="fruit__image" src={this.props.image} />
        <h3 className="fruit__name">{this.props.name}</h3>
      </div>
    );
  }
}

export default Fruit;