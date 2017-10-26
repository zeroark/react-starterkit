import React from 'react';
import {render} from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';
import FruitsList from './components/FruitsList/FruitsList.jsx';
import Fruit from './components/Fruit/Fruit.jsx';
import FruitDetail from './components/Fruit/FruitDetail.jsx';
import './style.scss';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();
class App extends React.Component {
  render () {
    return (
        // <div>
        //     <p>Choose a fruit to see its benefits:</p>
        //     <FruitsList />
        // </div>
        <Router history={history}>
            <div>
                    <Switch>
                        <Route exact path="/" component={FruitsList} />
                        <Route path="/fruit:id" component={FruitDetail} />
                    </Switch>
            </div>
        </Router>
    );
  }
}

render(<App/>, document.getElementById('app'));