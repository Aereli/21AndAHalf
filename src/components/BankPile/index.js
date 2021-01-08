import React from 'react'
import styles from './styles.module.scss'

const BankPile = ({ bankedCards }) => {
  return (
    <div className={styles.background}>
      <h2>Bank</h2>
      {bankedCards.map((card) => {
        return (
          <div>
            <img className="card" src={card.image} alt="card" />
          </div>
        )
      })}
    </div>
  )
}

export default BankPile
