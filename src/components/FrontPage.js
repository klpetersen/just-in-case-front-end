import React from 'react'
import '../css/FrontPage.css'
import '../css/Shared.css'

export default function FrontPage(props) {
    return (
        <div class='container'>
            <div className='front-title-container'>
                <h1>Do you really know about Coronavirus?</h1>
            </div>
            <div className='start-btn-container'> 
                <button onClick={props.toggleStartQuiz} className='start-btn'>START QUIZ</button>
            </div>
        </div>
    )
}