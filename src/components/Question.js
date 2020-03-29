import React,{useState} from 'react'
import '../css/Question.css'

export default function Question(props) {

    let answerRef = React.createRef();
    let trueRef = React.createRef();
    let falseRef = React.createRef();
    const [userResult, setUserResult] = useState(null);

    const submitAnswer = (value, id) => {
        let answer = props.questions.answer;
        let result = value === answer ? 'correct' : 'wrong';
        props.storeUserAnswer(result);
        setUserResult(result);
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
          trueRef.className = value === answer && answer ? 'question-button correct-button' : 'question-button disabled-button'
          falseRef.disabled = true;
          falseRef.className =  value === answer && !answer ? 'question-button correct-button' : 'question-button disabled-button'
          
        }

      const handleNext = () => {
        trueRef.disabled = false;
        falseRef.disabled = false;
        trueRef.className = 'question-button';
        falseRef.className = 'question-button';
        answerRef.style.display="none";
        props.nextQuestion(userResult);
      }
    
      return (
        <div className="question-container">
            <div className="buffer"></div>
            <div className="question-card">
                <div className="answer card">
                    <h1 className='question'> 
                        {props.questions.question}
                    </h1>
                    <div className='user-answers'>
                        <div> 
                            {/* The buttons will change color to either green or red depending on the answer */}
                            <button className='question-button' ref={ref => {trueRef = ref}}
                            onClick={() => submitAnswer(true,props.questions.id)}>True</button>
                        </div>
                        <div>
                            <button className='question-button' ref = {ref => {falseRef = ref}}
                            onClick={() => submitAnswer(false,props.questions.id)}>False</button>
                        </div>
                    </div>
                    <p className="bold">{props.count}/{'10'}</p>
                </div>
                <div className="answer card" ref={ref => {answerRef = ref}}
                    style={{display: 'none'}}
                >
                    <p className="answer-title bold">Answer: {props.questions.answer.toString().toUpperCase()}</p>
                    <p className="answer-description">{props.questions.reason}</p>
                    <button className='next-button'
                        onClick={() => handleNext()}
                    >Next</button>
                </div>
            </div>
        </div>
    )
}
