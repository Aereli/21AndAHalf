import React, { useContext } from 'react'
import { DeckContext } from '../../context/deckContext'
import styles from './styles.module.scss'

const PlayersHand = ({ playerCards }) => {
  const { sendToTable, sendToBank } = useContext(DeckContext)

  return (
    <div className={styles.container}>
      <h2>Player1</h2>
      {playerCards.map((card, i) => (
        <div className={styles.card}>
          <div className={styles.buttons}>
            <button onClick={() => sendToTable(card)}>send to table</button>
            <button onClick={() => sendToBank(card)}>send to bank</button>
          </div>

          <img className="card" src={card.image} alt="card" />
        </div>
      ))}
    </div>
  )
}

export default PlayersHand
