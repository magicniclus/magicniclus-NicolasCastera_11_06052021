import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import FicheLogement from './pages/FicheLogement';
import Home from './pages/Home';
import Page404 from './pages/Page404';
import './style/style.scss';

export default class App extends Component {
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/a-propos" exact component={About} />
            <Route path='/page404' component={Page404} /> 
            <Route path='/fiche-logement/*' component={FicheLogement} />
            <Route path='*' component={Page404} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
