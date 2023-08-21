import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import HomeUk from './Pages/HomeUk';
import HomeFr from './Pages/HomeFr';

function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/uk" element={HomeUk} />
        <Route path="/fr" element={HomeFr} />
      </Switch>

    </div>
  );
}

export default App;
