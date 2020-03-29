import React, { Component } from 'react'
import Question from './components/Question'
import Results from './components/Results'
import FrontPage from './components/FrontPage'
import './css/Shared.css'

export default class App extends Component {

  state = { 
    questions: null,
    count: 0,
    completed: false,
    frontPage: true
  }

  componentDidMount() { 
    this.fetchQuestions()
  }

  fetchQuestions = () => {
    fetch('http://localhost:3000/questions')
      .then(resp => resp.json()) 
      .then(questions => this.setState({questions: questions.sort(function(a,b){return 0.5 - Math.random()})}))
  }

  toggleStartQuiz = () => {
    this.setState({frontPage: !this.state.frontPage})
  }
  
  reset = () => {
    this.fetchQuestions();
    this.toggleStartQuiz();
    this.setState({
      count: 0,
      completed: false
    })
  }

  displayQuestion = () => {
    return <Question 
      questions={this.state.questions[this.state.count]}
      nextQuestion={this.nextQuestion}
      count={this.state.count+1}
      questionsCount={this.state.questions.length}
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
      <div className='main-container'>
        {this.state.frontPage ?
          <FrontPage toggleStartQuiz={this.toggleStartQuiz} />
          :
          this.state.completed ? 
            <Results questions={this.state.questions} reset={this.reset} />
            :
            this.state.questions && this.displayQuestion()
        }
      </div>
    )
  }
}

