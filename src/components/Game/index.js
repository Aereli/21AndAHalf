import React, { useContext } from 'react'
import { DeckContext } from '../../context/deckContext'
import CardSlotS from '../CardSlots'
import PlayersHand from '../PlayersHand'
import styles from './styles.module.scss'
import BackOfCard from '../../images/backOfCard.jpg'
import calculateUserCards from '../../utils/calculateUserCards'

const Game = () => {
  const {
    deal,
    deck,
    cardsOnTable,
    playerHand,
    setPlayerHand,
    bankedCards,
  } = useContext(DeckContext)

  return (
    <div>
      <div className={styles.table}>
        <CardSlotS bankedCards={cardsOnTable} />
      </div>

      <div className={styles.player1}>
        <div className={styles.drawPile}>
          <button
            onClick={() =>
              setPlayerHand(
                playerHand.concat(deal(calculateUserCards(playerHand)))
              )
            }
          >
            Draw
          </button>
          <p>{deck.length}</p>

          <img className="card" src={BackOfCard} alt="back of card" />

          <PlayersHand playerCards={playerHand} />
        </div>

        <CardSlotS bankedCards={bankedCards} />
      </div>
    </div>
  )
}

export default Game
