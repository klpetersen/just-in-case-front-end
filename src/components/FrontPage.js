import React from 'react'
import '../css/FrontPage.css'
import '../css/Shared.css'

export default function FrontPage(props) {
    return (
        <div class='container'>
            <h1>Just In Ques(o)</h1>
            <div className='start-btn-container'> 
                <button onClick={props.toggleStartQuiz} className='start-btn'>START QUIZ</button>
            </div>
        </div>
    )
}