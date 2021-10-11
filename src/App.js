import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import Home from './components/Home/home';
import Dashboard from './components/Dashboard/dashboard';

function App() {
  
  return (
    
    <Router>
      <div className="">
        
        <Switch>
          <Route exact path="/">
             <Home />
          </Route>
          <Route path="/dashboard">
             <Dashboard />
          </Route>
        </Switch>
        
      </div>
     </Router>
     
 
  );
}

export default App;