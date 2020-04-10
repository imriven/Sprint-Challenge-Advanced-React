import React from 'react';
import axios from 'axios'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state={
      data:[]
    }
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/players")
      .then(res => {
        console.log(res)
        this.setState({data: res.data})
        
      })
      .catch(err => console.error(err))
  }

  render() {
    return (
      <h1>Hi</h1>
    )
  }
}

export default App;