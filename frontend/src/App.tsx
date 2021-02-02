import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/signin' component={Signin}/>
        <Route path='/' component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
