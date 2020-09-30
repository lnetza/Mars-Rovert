import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import About from './Components/About';
import Nav from './Components/Nav';
import Mars from './Components/Mars';

function App() {
  return (
    
    <Router>
      
        <Nav/>
        <br></br>
        <Switch>
          <Route exact path='/' component={Mars} />
          <Route path path='/about' component={About} />
        </Switch>
      
    </Router>
  );
}

export default App;
