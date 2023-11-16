import { useState } from 'react'

import './App.css'

function App() {
  const [title, setTitle] = useState("")


  const splitText = title.split(" ")
  const textJoin = splitText.join("-")


  return (
    <>
      <div className="container">
        <h1 className="my-5 text-danger">Use Hyphen Between Two Words</h1>
        <h4>Project Title</h4>
        <input type="text" className="form-control" placeholder="Project Title . . . " onChange={(e) => setTitle(e.target.value)} />

        <h5 className="mt-5 text-secondary">Title: {textJoin}</h5>
      </div>
    </>
  )
}

export default App
