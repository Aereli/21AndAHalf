import React, { useEffect, useState } from "react"
import logo from "./logo.svg"
import "./App.css"

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("/deck").then((res) => res.json())
      setData(result)
    }

    fetchData()
    console.log(data.deck_id)
  }, [])

  return (
    <div className="App">
      this is home
      <div>
        <h1>{data.deck_id}</h1>
      </div>
    </div>
  )
}

export default App
