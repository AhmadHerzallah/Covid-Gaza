import Home from './Home';
import Gaza from './Gaza';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import '../css/App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="nav navbar navbar-expand-lg navbar-dark bg-dark">
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
          </ul>
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/Gaza" component={Gaza} />
      </div>
    </BrowserRouter>
  );
}

export default App;
