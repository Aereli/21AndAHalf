import React, { useContext } from 'react'
import { DeckContext } from '../../context/deckContext'
import BankPile from '../BankPile'
import PlayersHand from '../PlayersHand'
import Table from '../Table'
import styles from './styles.module.scss'
import BackOfCard from '../../images/backOfCard.jpg'
import calculateUserCards from '../../utils/calculateUserCards'

const Game = () => {
  const {
    deal,
    deck,
    cardsOnTable,
    playerHand,
    // sendCardToPlayer,
    setPlayerHand,
    bankedCards,
    // discardedCards,
    // sendToDiscardPile,
  } = useContext(DeckContext)

  //whenever a card gets played the card drawn becomes null.
  // useEffect(() => {
  //   setDrawDeck(null)
  // }, [playerHand, discardedCards])

  return (
    <div>
      <Table cardsOnTable={cardsOnTable} />

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

      <BankPile bankedCards={bankedCards} />
    </div>
  )
}

export default Game
