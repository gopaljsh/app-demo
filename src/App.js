import React, { Component } from 'react';

const createRange = num => 
Array.from(Array(num).keys())

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0,
       numCounters: 2
    }
  }

  addCounter = () => {
    this.setState(prevState => ({
      numCounters: prevState.numCounters + 1,
    }));
  }

  renderCounter = (index) => {
    return (
      <li key={index}>
        <p>Current Count: {this.state.count}</p>
        <button className="increament" onClick={this.increment}>Increment Count</button>
        <button className="decreament" onClick={this.decrement}>Decrement Count</button>
      </li>
    )
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }
  
  render() {
    const counterArray = createRange(this.state.numCounters)
    return (
      <div className="app-container">
        <button onClick={this.addCounter}>Add counter</button>
        <ul>
          {counterArray.map(num => {
            return this.renderCounter(num)
          })}
        </ul>
      </div>
    )
  }
}

export default App;
