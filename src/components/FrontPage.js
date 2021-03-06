import React from 'react'
import '../css/FrontPage.css'
import '../css/Shared.css'

export default function FrontPage(props) {
    return (
        <div className='container'>
            <div className='front-title-container'>
                <h1>Test your knowledge on Coronavirus</h1>
            </div>
            <div className='start-btn-container'> 
                <button onClick={props.toggleStartQuiz} className='start-btn'>START QUIZ</button>
            </div>
        </div>
    )
}