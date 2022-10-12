import React, { Component } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Home, Success,NotFound } from './pages/Index'
import { NavbarComponent } from './components';
class App extends Component {
  render() {
    return (
      <Router>
        <NavbarComponent />
        <main>
          <Routes>
            <Route path='/' element={<Home />} exact></Route>
            <Route path='/success' element={<Success />} exact></Route>
            <Route path='*' element={<NotFound />} exact></Route>
          </Routes>
        </main>
      </Router>
    )
  }
}

export default App