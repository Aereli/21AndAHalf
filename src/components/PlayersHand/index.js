import React, { useContext, useState } from 'react'
import { DeckContext } from '../../context/deckContext'
import styles from './styles.module.scss'

const PlayersHand = ({ playerCards }) => {
  const { sendToTableOrBank } = useContext(DeckContext)
  const [toggle, setToggle] = useState(false)
  const [activeCard, setActiveCard] = useState(null)
  const slots = [1, 2, 3, 4]

  function activateCardClicked(card, e) {
    card.area = e
    setActiveCard(card)
  }

  function sendToButton(card, value) {
    return (
      <button
        value={value}
        className="button"
        onClick={() => activateCardClicked(card, value)}
      >
        send to {value}
      </button>
    )
  }

  return (
    <div className={styles.container}>
      <h2>Player1</h2>
      {playerCards.map((card, i) => (
        <div key={i} className={styles.card}>
          <div className={styles.buttonsContainer}>
            {sendToButton(card, 'table')}
            {sendToButton(card, 'bank')}

            <div className={toggle ? styles.activeButton : styles.bankButton}>
              {slots.map(
                (slot, i) =>
                  activeCard === card && (
                    <button
                      key={i}
                      value={slot}
                      onClick={(e) =>
                        sendToTableOrBank(card, e.target.value - 1)
                      }
                    >
                      {slot}
                    </button>
                  )
              )}
            </div>
          </div>

          <img className="card" src={card.image} alt="card" />
        </div>
      ))}
    </div>
  )
}

export default PlayersHand
