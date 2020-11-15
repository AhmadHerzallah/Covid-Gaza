import Home from './Home';
import Gaza from './Gaza';
import Ahmad from './Ahmad';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import '../css/App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="nav navbar navbar-expand-lg navbar-dark bg-dark, header">
          <ul>
            <li className="navbar-brand">
              <NavLink exact to="/">
                Covid-19 Gaza
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/Gaza" activeClassName="active">
                Gaza
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/Ahmad" activeClassName="active">
                Who am i ?
              </NavLink>
            </li>
          </ul>
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/Gaza" component={Gaza} />
        <Route path="/Ahmad" component={Ahmad} />
      </div>
    </BrowserRouter>
  );
}

export default App;
