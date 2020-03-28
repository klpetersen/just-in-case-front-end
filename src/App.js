import React, { Component } from 'react'
import Question from './components/Question'

export default class App extends Component {

  state = { 
    questions: null,
    count: 0
  }

  componentDidMount() { 
    fetch('http://localhost:3000/questions')
      .then(resp => resp.json()) 
      .then(questions => this.setState({questions}))
  }

  displayQuestion = () => {
    return <Question questions={this.state.questions[this.state.count]}
      nextQuestion={this.nextQuestion}
    /> 
  }

  nextQuestion = () => {
    this.setState({
      count: this.state.count + 1
    });
    // this.displayQuestion()
  }


  render() {
    return (
      <div>
        {this.state.questions && this.displayQuestion()}
      </div>
    )
  }
}

