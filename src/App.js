import React, { Component } from 'react'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <header className="container-fluid">
          <div className="row">
            <div className="col-sm-6">ReactApp</div>
            <div className="col-sm-6 text-right">User Name</div>
          </div>
        </header>
        <div className="middle-container">
          <div className="sidebar">Sidebar</div>
          <div className="content-area">Content Area</div>
        </div>
      </div>
    )
  }
}
