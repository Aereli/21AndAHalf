import React, { useContext } from 'react'
import { DeckContext } from '../../context/deckContext'
import styles from './styles.module.scss'

const PlayersHand = ({ playerCards }) => {
  const { sendToTable } = useContext(DeckContext)

  return (
    <div className={styles.container}>
      <h2>Player1</h2>
      {console.log('playercards', playerCards)}
      {playerCards.map((card) => (
        <div>
          <button onClick={() => sendToTable(card)}>send to table</button>
          <div>
            <img className={styles.cardImage} src={card.image} alt="card" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default PlayersHand
