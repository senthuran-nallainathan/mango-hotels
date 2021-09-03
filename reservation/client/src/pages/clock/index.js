import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';

function TimeAdd() {
  const [time, setTime] = useState(Date());

  return (
    <div>
      <p>Current {time} Time</p>
      <button onClick={() => setTime(time - 5.5)}>
        Get UK Time
      </button>
    </div>
  );
}

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
      //const [time, setTime] = useState(Date());
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
          <h2>Time: {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );

  export default Clock;