import React, { Component } from 'react'
import '../css/Resources.css'

export default class Resources extends Component {
    
    render() {
        return (
            <div className='resource-component'>
                <h1> Resources </h1>
                <div className='resource-container'>
                    <div className='resource'>
                        <h2>How To Avoid The Coronavirus</h2>
                        <ul className='resource-list'>
                            <li><a href='https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html' target="_blank" rel="noopener noreferrer">Sickness Prevention - CDC</a></li>
                            <li><a href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public' target="_blank" rel="noopener noreferrer">Advice For The Public - WHO</a></li>
                            <li><a href='https://www.osha.gov/SLTC/covid-19/controlprevention.html' target="_blank" rel="noopener noreferrer">Coronavirus Prevention - OSHA</a></li>
                        </ul>
                    </div>
                    <div className='resource'>
                        <h2>What To Do If You Are Sick</h2>
                        <ul className='resource-list'>
                            <li><a href='https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html' target="_blank" rel="noopener noreferrer">CDC</a></li>
                            <li><a href='https://www.hopkinsmedicine.org/health/conditions-and-diseases/coronavirus/coronavirus-what-if-i-feel-sick' target="_blank" rel="noopener noreferrer">Johns Hopkins</a></li>
                        </ul>
                    </div>
                    <div className='resource'>
                        <h2>Unemployment</h2>
                        <ul className='resource-list'>
                            <li><a href='https://ag.ny.gov/coronavirus' target="_blank" rel="noopener noreferrer">Office of the Attorney General of NY</a></li>
                            <li><a href='https://labor.ny.gov/unemploymentassistance.shtm' target="_blank" rel="noopener noreferrer">Unemployment Insurance - NY Department Of Labor</a></li>
                            <li><a href='https://labor.ny.gov/careerservices/planyourcareer/training.shtm' target="_blank" rel="noopener noreferrer">Career Training Resources - NY Department of Labor</a></li>
                            <li><a href='https://labor.ny.gov/careerservices/CareerServicesIndex.shtm' target="_blank" rel="noopener noreferrer">Career Services - NY Department Of Labor</a></li>
                            <li><a href='https://www.nytimes.com/article/coronavirus-money-unemployment.html' target="_blank" rel="noopener noreferrer">Your Money: A Hub for Help During the Coronavirus Crisis - New York Times</a></li>
                            <li><a href='https://www.ny1.com/nyc/all-boroughs/coronavirus/2020/03/23/companies-hiring-during-coronavirus-crisis' target="_blank" rel="noopener noreferrer">What Companies Are Hiring During the Coronavirus Crisis? - Spectrum News NY1 </a></li>
                        </ul>
                    </div>
                    <div className='resource'>
                        <h2>General Resources</h2>
                        <ul className='resource-list'>
                            <li><a href='https://www.cdc.gov/coronavirus/resources.html' target="_blank" rel="noopener noreferrer">CDC</a></li>
                            <li><a href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019' target="_blank" rel="noopener noreferrer">WHO</a></li>
                            <li><a href='https://www.dol.gov/coronavirus' target="_blank" rel="noopener noreferrer">US Department of Labor</a></li>
                            <li><a href='https://www.osha.gov/SLTC/covid-19/' target="_blank" rel="noopener noreferrer">OSHA</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
