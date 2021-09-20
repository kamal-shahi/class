import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Profile from './components/profile';
import NavBar from './components/header';

function App() {
  return (
      <Router>
        {/* navigation bar */}
        <NavBar/>
        {/* end */}
        <div className="container">
              <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/profile">
                    <Profile/>
                </Route>
              </Switch>
        </div>
      </Router>
   
  );
}

export default App;
