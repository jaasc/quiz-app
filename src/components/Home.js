import React from "react"
import blob from "../images/blobs-1.png"
import blob2 from "../images/blobs.png"
import { useNavigate } from "react-router-dom"

export default function Home(){
    let navigate = useNavigate()

    return (
        <div className="container">
            <h1>Quizzical</h1>
            <h3>Test your knowledge with this fun quiz!</h3>
            <button className="startBtn"
                onClick={() => navigate("/questions")}>Start Quiz</button>
            <img className="blob-1" src={blob} alt="design"/>
            <img className="blob-2" src={blob2} alt="design"/>
        </div>
    )
}