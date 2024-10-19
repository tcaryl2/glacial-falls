import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

import Navbar from './Navbar';
import Home from './Home';
import DataScience from './DataScience';
import Computer from './Computer';
import Math from './Math';
import Finance from './Finance';
import Contact from './Contact';
import PageNotFound from './PageNotFound';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Router>
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home/>
                <DataScience/>
                <Math/>
                <Finance/>
                <Contact/>
              </Route>
              <Route path="/computer">
                  <Computer/>
                </Route>
            </Switch>
          </div>
        </Router>
      <Footer/>
    </div>
  );
}

export default App;
