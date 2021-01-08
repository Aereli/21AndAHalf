import React, { useEffect, useState } from 'react'
import './App.css'
import './styles/globals.scss'
// import DrawCard from './components/DrawCard'
import Game from './components/Game'
// import Table from './components/TableOLD/Table'
import { DeckContextProvider } from './context/deckContext'

function App() {
  const [data, setData] = useState([])
  const [newData, setNewData] = useState('')
  const [toggle, setToggle] = useState('invisible')

  useEffect(() => {
    const fetchData = () => {
      fetch('/deck')
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err))
    }
    fetchData()
    console.log('this is data', data)
  }, [newData])

  const newDeckHandleClick = () => {
    setNewData(data.deck_id)
    setToggle('notInvisible')
  }

  return (
    <div className="App">
      <h1>21 and a 1/2</h1>
      <DeckContextProvider>
        <Game />
      </DeckContextProvider>
      {/* <div>
        <h2>Deck ID: {newData}</h2>
      </div>
      <button onClick={newDeckHandleClick}>New Deck</button>
      <div className="table">
        <Table />
      </div>
      <div className={toggle}>
        <DrawCard newData={newData}></DrawCard>
      </div> */}
    </div>
  )
}

export default App
