import React from "react"
import Questions from "./components/Questions"
import Home from "./components/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

export default function App(){
    return(
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/questions" element={<Questions/>}/>
        </Routes>
        </Router>
  )
}