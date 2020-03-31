import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import Map from './components/Map';

const App = () => {
  return (
    <div >
      <BrowserRouter>
        <Route exact path='/' component={Map} />
      </BrowserRouter>
    </div>
  );
}

export default App;
