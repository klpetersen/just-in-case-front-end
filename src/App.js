import React, { Component } from 'react'
import Question from './components/Question'

export default class App extends Component {

  state = { 
    questions: null
  }

  componentDidMount() { 
    fetch('http://localhost:3000/questions')
      .then(resp => resp.json()) 
      .then(questions => this.setState({questions}))
  }

  render() {
    return (
      <div>
        <Question questions={this.state.questions}/> 
      </div>
    )
  }
}

