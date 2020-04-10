import React from 'react';
import axios from 'axios';
import Display from "./components/display"



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
      <>
      { this.state.data && <Display players={this.state.data} /> }
      </>
    )
  }
}

export default App;