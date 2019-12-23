import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Header from './components/Header';
import SubHeader from './components/Header/SubHeader';
import GoUpButton from './components/common/GoUpButton'

function App() {
  return (
    <div className="App">
      {/*<h1>Some Shop</h1>*/}
      {/*<p> for real</p>*/}
      <Header/>
      <BrowserRouter><SubHeader /></BrowserRouter>
      <GoUpButton/>
    </div>
  );
}

export default App;
