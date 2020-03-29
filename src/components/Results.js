import React, {useState} from 'react'
import '../css/Results.css'

export default function Results(props) {
    const [seeResults, setSeeResults] = useState(false);
    const handleBack = () => {
        props.reset();
    }

    const punchLine = () => {
        const percentage = props.totalRight * 1.0 / 16 * 100;
        switch (true) {
            case (percentage < 30.0):
                return <div classname='punchline'> below 30 </div>;
            case (percentage < 60.0):
                return <div classname='punchline'> below 60</div>;                  
            case (percentage < 80.0):
                return <div classname='punchline'> below 80</div>;
            case (percentage < 90.0):
                return <div classname='punchline'> below 90</div>;
            case (percentage < 100.0):
                return <div classname='punchline'>below 100</div>;            
            default:
                return <div classname='punchline'>100</div>;
        }   
    }

    return (
        <div className='results'>
            <header className='result-header'>
                <p>Results:</p>
                {punchLine()}    
            </header>

            <button className="menu-button" onClick={() => setSeeResults(!seeResults)}>See Answers</button>
            {seeResults && props.questions.map(question =>
                <div className={`question-box ${question.userResult ? '' : 'wrong-answer'}`}>
                    <div className='question'>
                        {question.question}
                    </div>
                    <div className='reason'>
                        {question.reason}<br></br>
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
