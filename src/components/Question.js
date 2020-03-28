import React from 'react'

export default function Question(props) {

    let answerRef = React.createRef();
    let trueRef = React.createRef();
    let falseRef = React.createRef();


    const submitAnswer = (value, id) => {
        let answer = props.questions.answer;
        let result = value === answer ? 'correct' : 'wrong';
        console.log(result)
        fetch(`http://localhost:3000/questions/${id}`,{
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
        disableButtons();
      }

      const disableButtons = () => {
          trueRef.disabled = true;
          falseRef.disabled = true;
      }

      const handleNext = () => {
        trueRef.disabled = false;
        falseRef.disabled = false;
        answerRef.style.display="none";
        props.nextQuestion();
      }
    
    return (
        <div>
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
            <div ref={ref => {answerRef = ref}}
                style={{display: 'none'}}
            >
                <p>Answer: {props.questions.answer.toString().toUpperCase()}</p>
                <p>{props.questions.reason}</p>
                <button className='button'
                    onClick={() => handleNext()}
                >NEXT</button>
            </div>
        </div>
    )
}
