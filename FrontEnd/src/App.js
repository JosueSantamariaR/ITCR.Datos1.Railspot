import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {About} from './components/About'
import {Users} from './components/Users'
import {Navbar} from './components/Navbar'
import {Tickets} from './components/Tickets'
import {Routes} from './components/Routes'
import {Admin} from './components/Admin'
function App() {
  return (
    <Router>
      <Navbar/>
      <div className="container p-2">
        <Switch>
          <Route path="/about" component={About}/>"
          <Route  path ="/users" component={Users}/>
          <Route path="/routes" component={Routes}/>"
          <Route  path ="/tickets" component={Tickets}/>
          <Route  path ="/admin" component={Admin}/>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
