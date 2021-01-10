import React, { useState } from 'react'
import styles from './styles.module.scss'

const BankPile = ({ bankedCards }) => {
  bankedCards.reduce((el, acc) => {
    console.log('el', el, 'acc', acc)
  }, [])

  return (
    <div className={styles.background}>
      <h2>Bank</h2>
      {bankedCards.forEach((element) => {
        element.length > 0 &&
          element.map((card, i) => (
            <img key={i} className="card" src={card.image} alt="card" />
          ))
      })}
    </div>
  )
}

export default BankPile
