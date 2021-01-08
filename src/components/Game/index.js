import React, { useContext, useEffect, useState } from 'react'
import { DeckContext } from '../../context/deckContext'
import DiscardPile from '../DiscardPile'
import PlayersHand from '../PlayersHand'
import Table from '../Table'
import styles from './styles.module.scss'
import BackOfCard from '../../images/backOfCard.jpg'
import calculateUserCards from '../../utils/calculateUserCards'

const Game = () => {
  const {
    deal,
    cardsOnTable,
    playerHand,
    sendCardToPlayer,
    discardedCards,
    sendToDiscardPile,
  } = useContext(DeckContext)

  const [drawDeck, setDrawDeck] = useState([])

  //whenever a card gets played the card drawn becomes null.
  useEffect(() => {
    setDrawDeck(null)
  }, [playerHand, discardedCards])

  // calculateUserCards(playerHand)

  return (
    <div>
      <Table cardsOnTable={cardsOnTable} />

      <div className={styles.drawPile}>
        <button
          onClick={() => setDrawDeck(deal(calculateUserCards(playerHand)))}
        >
          Draw
        </button>
        {drawDeck ? (
          drawDeck.map((card) => {
            console.log('card being sent', card)
            return (
              <div>
                <img className="card" src={card.image} />
                <div>
                  <button onClick={() => sendCardToPlayer(card)}>
                    send to player
                  </button>
                </div>
                <button onClick={() => sendToDiscardPile(card)}>
                  send to discard Pile
                </button>
              </div>
            )
          })
        ) : (
          <img className="card" src={BackOfCard} alt="back of card" />
        )}
      </div>

      <DiscardPile discardedCards={discardedCards} />

      <PlayersHand playerCards={playerHand} />
    </div>
  )
}

export default Game
