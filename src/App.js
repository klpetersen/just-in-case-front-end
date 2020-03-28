import React, { Component } from 'react'
import Question from './components/Question'
import Results from './components/Results'

export default class App extends Component {

  state = { 
    questions: null,
    count: 0,
    completed: false
  }

  componentDidMount() { 
    fetch('http://localhost:3000/questions')
      .then(resp => resp.json()) 
      .then(questions => this.setState({questions}))
  }

  displayQuestion = () => {
    return <Question 
      questions={this.state.questions[this.state.count]}
      nextQuestion={this.nextQuestion}
    /> 
  }

  nextQuestion = () => {
    if(this.state.count < this.state.questions.length-1){
      this.setState({
        count: this.state.count + 1
      });
    } else {
      this.setState({completed:true})
    }
  }

  render() {
    return (
      <div>
        {this.state.completed ? 
          <Results questions={this.state.questions} />
          :
          this.state.questions && this.displayQuestion()
        }
      </div>
    )
  }
}

