import React from 'react'
import styles from './styles.module.scss'

const BankPile = ({ bankedCards }) => {
  const slots = [0, 1, 2, 3]

  function bankSlots(num) {
    return bankedCards[num].map((card, i) => (
      <img
        style={{ top: `calc(${i}px * 37)` }}
        className="card"
        src={card.image}
        alt="card"
      ></img>
    ))
  }

  return (
    <div className={styles.background}>
      <h2>Bank</h2>
      <div className={styles.bank}>
        {slots.map((slot) => (
          <div className={styles.slotContainer}>
            <p>Bank Slot : {slot + 1}</p>
            <div className={styles.slot}>{bankSlots(slot)}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BankPile
