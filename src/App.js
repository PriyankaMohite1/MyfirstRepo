import React from 'react';
import Props from './Props'
import Home from './Home';
import AboutUS from './AboutUS'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <div className="App">
        <h1><center> My practice frist App</center></h1>
        <Props name="Priyanka Mohite" />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={<Home />} />
          <Route path="/AboutUs" Component={<AboutUS />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
