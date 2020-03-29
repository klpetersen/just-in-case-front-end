import React from 'react'
import '../css/FrontPage.css'

export default function FrontPage(props) {
    return (
        <div class="body">
            <h1>Just In Ques(o)</h1>
            <p>stuff</p>
            <button onClick={props.toggleStartQuiz}>Start Quiz</button>
        </div>
    )
}