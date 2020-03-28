import React from 'react'
import '../css/Results.css'

export default function Results(props) {

    const handleBack = () => {
        props.reset();
    }

    return (
        <div className='results'>
            {props.questions.map(question =>
                <div>
                    <div className='question'>
                        {question.question}
                    </div>
                    <div className='reason'>
                        {question.reason}<br></br>
                        <a href={question.source}>{question.source}</a>
                    </div>
                    <div className='stats'>
                        {question.percent_correct.toFixed(2)}% got this correct.
                    </div>
                </div>
            )}
            <button onClick={handleBack}>BACK</button>
        </div>
    )
}
