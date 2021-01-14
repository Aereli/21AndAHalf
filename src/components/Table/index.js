import React from 'react'
import BankPile from '../BankPile'

import styles from './styles.module.scss'
const Table = ({ cardsOnTable }) => {
  return (
    <div className={styles.container}>
      <h1>this is table</h1>
      {/* <BankPile bankedCards={cardsOnTable} /> */}
      {cardsOnTable.map((card, i) => (
        <div key={i}>
          <img className="card" src={card.image} alt="card" />
        </div>
      ))}
    </div>
  )
}

export default Table
