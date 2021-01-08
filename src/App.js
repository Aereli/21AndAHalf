import React from 'react'
import './App.css'
import './styles/globals.scss'
// import DrawCard from './components/DrawCard'
import Game from './components/Game'
// import Table from './components/TableOLD/Table'
import { DeckContextProvider } from './context/deckContext'

function App() {
  return (
    <div className="App">
      <h1>21 and a 1/2</h1>
      <DeckContextProvider>
        <Game />
      </DeckContextProvider>
    </div>
  )
}

export default App
