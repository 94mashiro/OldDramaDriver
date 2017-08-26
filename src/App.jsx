import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class App extends Component {
  render() {
    return (
      <h1>{this.props.store.todos[0]}</h1>
    );
  }
}

export default App;
