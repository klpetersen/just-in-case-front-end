import React, { Component } from 'react'
import Question from './components/Question'
import Results from './components/Results'
import FrontPage from './components/FrontPage'
import Resources from './components/Resources'
import './css/Shared.css'

export default class App extends Component {

  state = { 
    questions: null,
    count: 0,
    completed: false,
    frontPage: true,
    totalRight: 0,
    resources: false
  }

  componentDidMount() { 
    this.fetchQuestions()
  }

  fetchQuestions = () => {
    fetch('https://justincase-backend.herokuapp.com/questions')
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
      completed: false,
      totalRight: 0,
      resources: false
    })
  }

  displayQuestion = () => {
    return <Question 
      storeUserAnswer={this.storeUserAnswer}
      questions={this.state.questions[this.state.count]}
      nextQuestion={this.nextQuestion}
      count={this.state.count+1}
      questionsCount={this.state.questions.length}
    /> 
  }
  
  handleResources = () => {
    this.setState({
      resources: true
    })
  }
  storeUserAnswer = (userInput) => {
    let answeredQuestions = this.state.questions;
    answeredQuestions[this.state.count]["userResult"] = userInput;
    this.setState({
      questions: answeredQuestions
    })
  }

  nextQuestion = (userResult) => {
    
    if(this.state.count < this.state.questions.length-1){
      this.setState({
        count: this.state.count + 1,
        totalRight: userResult === 'correct' ? this.state.totalRight + 1 : this.state.totalRight 
      });
    } else {
      this.setState({completed:true})
    }
    console.log(this.state.totalRight);
  }

  render() {
    return (
      <div className='main-container'>
        {this.state.resources ?
          <Resources />
          : 
          this.state.frontPage ?
            <FrontPage toggleStartQuiz={this.toggleStartQuiz} />
            :
            this.state.completed ? 
              <Results questions={this.state.questions} handleResources={this.handleResources}totalRight={this.state.totalRight} reset={this.reset} />
              :
              this.state.questions && this.displayQuestion()
        }
      </div>
    )
  }
}

