import React, { useContext } from 'react'
import { DeckContext } from '../../context/deckContext'
import styles from './styles.module.scss'

const PlayersHand = ({ playerCards }) => {
  const { table, cardsOnTable, discardPile, trashPile } = useContext(
    DeckContext
  )

  function sendToTable(card) {
    console.log('player', card)
    const removeCard = playerCards.filter((check) => check === card)

    table(card)
    const test = playerCards.splice(removeCard)
    console.log('test', removeCard)
  }

  function sendToTrash(card) {
    // setTrashPile([...trashPile, card])
    discardPile(card)
    // setTablePile(null)
    // console.log(trashPile)
  }

  return (
    <div className={styles.table}>
      <h2>Player1</h2>

      {playerCards.map((card) => (
        //TODO: give two options,
        // send card to table,
        // send card to discard pile.
        <>
          <button onClick={() => sendToTable(card)}>send to table</button>
          {/* <button onClick={() => sendToTrash(card)}>send to trash</button> */}
          <div>
            <img className={styles.cardImage} src={card.image} />
          </div>
        </>
      ))}
    </div>
  )
}

export default PlayersHand
