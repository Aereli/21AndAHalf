import React, { useContext, useState } from 'react'
import { DeckContext } from '../../context/deckContext'
import styles from './styles.module.scss'

const PlayersHand = ({ playerCards }) => {
  const { sendToTable, sendToBank } = useContext(DeckContext)
  const [toggle, setToggle] = useState(true)
  const [activeCard, setActiveCard] = useState(null)

  function toggleBank(card, e) {
    setToggle(false)
    setActiveCard(card)
    // setActiveCard(e.target.value)
  }

  function bankButton(e, card) {
    sendToBank(card, e.target.value - 1)
  }

  return (
    <div className={styles.container}>
      <h2>Player1</h2>
      {playerCards.map((card, i) => (
        <div key={i} className={styles.card}>
          <div className={styles.buttons}>
            {/* <button onClick={() => sendToTable(card)}>send to table</button> */}
            <button
              value="table"
              className={
                card === activeCard && !toggle
                  ? styles.tableButton
                  : styles.activeTableButton
              }
              onClick={(e) => toggleBank(card, e)}
            >
              send to table
            </button>
            <button onClick={(e) => toggleBank(card, e)}>send to bank</button>

            {activeCard === card && (
              <div className={toggle ? styles.activeButton : styles.bankButton}>
                <button value="1" onClick={(e) => bankButton(e, card)}>
                  1
                </button>
                <button value="2" onClick={(e) => bankButton(e, card)}>
                  2
                </button>
                <button value="3" onClick={(e) => bankButton(e, card)}>
                  3
                </button>
                <button value="4" onClick={(e) => bankButton(e, card)}>
                  4
                </button>
              </div>
            )}
          </div>

          <img className="card" src={card.image} alt="card" />
        </div>
      ))}
    </div>
  )
}

export default PlayersHand
