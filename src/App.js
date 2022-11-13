import logo from "./logo.svg";
import HomeView from "./mod/HomeView";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React, {Fragment} from 'react'
import HeaderMod from "./mod/HeaderMod";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route exact path='/' element={<HomeView/>}/>
          <Route exact path='/home' element={<HomeView/>}/>
        </Routes>
      </Fragment>
    </Router>
  )
};

export default App;
