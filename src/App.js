import React, { Component } from 'react';
import './App.css';

import Header from './header/header';
import Sidebar from './sidebar/sidebar';

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <div className="middle-container">
          <Sidebar />
          <div className="content-area">Content Area</div>
        </div>
      </div>
    )
  }
}
