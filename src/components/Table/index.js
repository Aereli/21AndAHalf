import React from 'react'

import styles from './styles.module.scss'
const Table = ({ cardsOnTable }) => {
  return (
    <div className={styles.table}>
      <h1>this is table</h1>
      {cardsOnTable.map((card) => (
        <div>
          <img className="card" src={card.image} />
        </div>
      ))}
    </div>
  )
}

export default Table
