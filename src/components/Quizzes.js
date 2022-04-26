import React from "react"

export default function Quizzes(props){
    const pop = props.q.incorrect_answers.map( a => {   
        const choice = a.replace(/&#?\w+;/g, match => props.chr[match])
        return (
            <div className="temp" key={choice} onChange={props.handleClick}>
                <input className={`inputRadio${(a === props.q.correct_answer)? "check" : 
                (props.tried.find(b => b.attempt === choice))? "wrong" : ""}`}
                    type="radio" id={choice} name={props.q.question} 
                    value={choice} disabled={props.isCheck && true}/>
                <label htmlFor={choice}>{choice}</label>
            </div>
        )})
    
    return(
        <div className="quizIndividual">
            <h4>{props.q.question.replace(/&#?\w+;/g, match => props.chr[match])}</h4>          
            <div className="choiceContainer">
                {pop}
            </div> 
            <hr></hr>      
        </div>
    )
}
