import React, {useState} from 'react'
import '../css/Results.css'
import covidCheers from '../images/covidCheers.png'
import zero from '../images/0.png'
import below30 from '../images/below30.png'
import below60 from '../images/below60.png'
import below80 from '../images/below80.png'
import below90 from '../images/below90.png'

export default function Results(props) {
    const [seeResults, setSeeResults] = useState(false);
    const handleBack = () => {
        props.reset();
    }

    const punchLine = () => {
        const percentage = props.totalRight * 1.0 / 10 * 100;
        switch (true) {
            case (percentage == 0):
                return <div className='punchline'> I think you need more toilet paper!<br></br><img src={zero}></img> </div>;
            case (percentage < 30.0):
                return <div className='punchline'> Keep washing your hands!<br></br><img src={below30}></img> </div>;
            case (percentage < 60.0):
                return <div className='punchline'> You can do better! try again<br></br><img src={below60}></img> </div>;       
            case (percentage <= 80.0):
                return <div className='punchline'> You're doing great keep going<br></br><img src={below80}></img> </div>;
            case (percentage <= 90.0):
                return <div className='punchline'> You're allowed to binge on Netflix<br></br><img src={below90}></img> </div>; 
            default:
                return <div className='punchline'> Awesome job buttercup!<br></br><img src={covidCheers}></img></div>;
        }   
    }

    return (
        <div className='results'>
            <header className='result-header'>
            <p>Results: {(props.totalRight * 1.0 / 10 * 100).toFixed(0)}%</p>
                {punchLine()}    
            </header>

            <button className="menu-button" onClick={() => setSeeResults(!seeResults)}>See Answers</button>
            {seeResults && props.questions.slice(0,10).map(question =>
                <div className={`question-box ${question.userResult === 'wrong' ?` wrong-answer` : ''}`}>
                    <div className='question'>
                        {question.question}
                    </div>
                    <div className='reason'>
                        {question.reason }<br></br>
                        <br></br>
                        <p className="bold">Source:</p>
                        <a href={question.source}>{question.source}</a>
                    </div>
                    <div className='stats'>
                        {question.percent_correct.toFixed(2)}% got this correct.
                    </div>
                </div>
            )}
            <button className="menu-button" onClick={handleBack}>Retake Quiz</button>
            <button className="menu-button" onClick={props.handleResources}>More Resources</button>

        </div>
    )
}
