import React from 'react'
import styles from './styles.module.scss'

const DiscardPile = ({ discardedCards }) => {
  return (
    <div className={styles.background}>
      <h2>Discard Pile</h2>
      {discardedCards.map((trashCard) => {
        return (
          <div>
            <img className="card" src={trashCard.image} alt="card" />
          </div>
        )
      })}
    </div>
  )
}

export default DiscardPile
