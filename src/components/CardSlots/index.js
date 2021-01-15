import React from 'react'
import styles from './styles.module.scss'

const CardSlotS = ({ bankedCards }) => {
  const slots = [0, 1, 2, 3]

  function slotPosition(num) {
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
    <div className={styles.container}>
      {slots.map((slot, i) => (
        <div key={i} className={styles.slotContainer}>
          <p>Card Slot : {slot + 1}</p>
          <div className={styles.slot}>{slotPosition(slot)}</div>
        </div>
      ))}
    </div>
  )
}

export default CardSlotS
