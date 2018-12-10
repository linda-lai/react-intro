import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ErrorNotFound from './ErrorNotFound';

class App extends Component {
  render() {
    const path = window.location.pathname;
    if (path == '/') {
      return <HomePage />
    } else if (path == '/about') {
      return <AboutPage />
    } else {
      return <ErrorNotFound />
    }
  }
}

export default App;