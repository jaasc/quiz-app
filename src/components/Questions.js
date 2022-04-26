import React, { useState, useEffect }from "react"
import Quizzes from "../components/Quizzes"
import { useNavigate} from "react-router-dom"

export default function Questions(){
    let navigate = useNavigate()
    const [list, setList] = useState([])
    const [tries, setTries] = useState([])
    const [check, setCheck] = useState(false)
    const [count, setCount] = useState(0)
    const entities = {
            "&#039;": "'", "&quot;": '"', "&ntilde;": "ñ",
            "&eacute;": "é", "&amp;": "&", "&uuml;": "ü", "&lt;": "<"
          }

    useEffect(() => {
        async function getList() {
            const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            const data = await res.json()
            data.results.forEach(a => {
                const rNo = Math.floor(Math.random() * 4)
                a.incorrect_answers.splice(rNo, 0, a.correct_answer)
            })
            setList(data.results)
        }
        getList()
    }, [])
    
    const init = list.map(item => (
        <Quizzes key={item.question} q={item} handleClick={attempt} 
            isCheck={check} tried={tries} chr={entities}/>
    ))
    
    function attempt(event){        
        const { value, name } = event.target
        const att = tries.map(a => a.question === name? ({...a, attempt: value}) : a)  
        tries.find(a => a.question === name)? setTries(att) :
            setTries(a => [...a, {question: name, attempt:value}])  
    } 
    
    function checkAnswers(){
        setCheck(true)
        tries.map(a => list.map(b => 
            a.question === b.question &&
                a.attempt === b.correct_answer.replace(/&#?\w+;/g, match => entities[match]) && setCount(c => c+1)))
    }
    
    return(
        <div className="quizContainer">
            {init}
            {check? <div className="scoreContainer">
                <h5>You have scored {count}/{list.length} correct answers</h5>
                <button className="playBtn" onClick={() => navigate("/")}>Play Again</button></div> :
                <button className="checkBtn" onClick={checkAnswers}>Check Answers</button>}
        </div>
    )
}