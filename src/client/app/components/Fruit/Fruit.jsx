import React from 'react';
import './fruit.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

class Fruit extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link to={`/fruit/${this.props.name}`} className="fruit">
          <img className="fruit__image" src={this.props.image} />
          <h3 className="fruit__name">{this.props.name}</h3>
      </Link>
    );
  }
}

export default Fruit;