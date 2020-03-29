import React from 'react'
import '../css/Question.css'

export default function Question(props) {

    let answerRef = React.createRef();
    let trueRef = React.createRef();
    let falseRef = React.createRef();

    const submitAnswer = (value, id) => {
        let answer = props.questions.answer;
        let result = value === answer ? 'correct' : 'wrong';
        console.log(result)
        fetch(`https://justincase-backend.herokuapp.com/questions/${id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                user_answer: result
            })
        })
        answerRef.style.display="block"
        disableButtons(answer, value);
      }

      const disableButtons = (answer, value) => {
          trueRef.disabled = true;
          trueRef.className = value === answer && answer ? 'button correct-button' : 'button disabled-button'
          falseRef.disabled = true;
          falseRef.className =  value === answer && !answer ? 'button correct-button' : 'button disabled-button'
      }

      const handleNext = () => {
        trueRef.disabled = false;
        falseRef.disabled = false;
        trueRef.className = 'button';
        falseRef.className = 'button';
        answerRef.style.display="none";
        props.nextQuestion();
      }
    
    return (
        <div class="question-container">
            <p>{props.count}/{props.questionsCount}</p>
            <h1 className='question'> 
                {props.questions.question}
            </h1>
            <div className='user-answers'>
                <div> 
                    {/* The buttons will change color to either green or red depending on the answer */}
                    <button className='button' ref={ref => {trueRef = ref}}
                    onClick={() => submitAnswer(true,props.questions.id)}>TRUE</button>
                </div>
                <div>
                    <button className='button' ref = {ref => {falseRef = ref}}
                    onClick={() => submitAnswer(false,props.questions.id)}>FALSE</button>
                </div>
            </div>
            <div class="answer" ref={ref => {answerRef = ref}}
                style={{display: 'none'}}
            >
                <p class="answer-title">Answer: {props.questions.answer.toString().toUpperCase()}</p>
                <p class="answer-description">{props.questions.reason}</p>
                <button className='button'
                    onClick={() => handleNext()}
                >NEXT</button>
            </div>
        </div>
    )
}
