import React, { Component } from 'react';
import './App.css';
class App extends Component {

  render() {
    return (
      <div className="App">
        <p>Phiên bản React hiện tại trên máy của bạn là: {React.version}</p>
      </div>
    );
  }
}

export default App;