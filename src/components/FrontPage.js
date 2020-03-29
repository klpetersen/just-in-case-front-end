import React from 'react'
import '../css/FrontPage.css'
import '../css/Shared.css'

export default function FrontPage(props) {
    return (
        <div class='container'>
            <div className='logo-header'> 
            </div>
            <h1>Just In Ques(o)</h1>
                <button onClick={props.toggleStartQuiz}>Start Quiz</button>

        </div>
    )
}