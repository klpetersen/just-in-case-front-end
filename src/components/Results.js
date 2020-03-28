import React from 'react'

export default function Results(props) {
    return (
        <div className='results'>
            {props.questions.map(question =>
                <div>
                    <div className='questions'>
                        {question.question}
                    </div>
                    <div className='answer'>
                        {question.reason}
                    </div>
                    <div className='stats'>
                        {question.percent_correct}% got this correct.
                    </div>
                </div>
            )}
            <button>BACK</button>
        </div>
    )
}
