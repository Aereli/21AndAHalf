import React, { useContext, useEffect, useState } from 'react'
import { DeckContext } from '../../context/deckContext'
import DiscardPile from '../DiscardPile'
import PlayersHand from '../PlayersHand'
import Table from '../Table'
import styles from './styles.module.scss'

const Game = () => {
  const {
    deal,
    deck,
    cardsOnTable,
    playerHand,
    sendCardToPlayer,
    sendToDiscardPile,
    trashPile,

    setTrashPile,
  } = useContext(DeckContext)
  const [playerCards, setPlayerCards] = useState([])
  const [drawDeck, setDrawDeck] = useState([])
  // const [trashPile, setTrashPile] = useState([])

  // function sendToTrash(card) {
  //   setTrashPile([...trashPile, card])
  //   setDrawDeck(null)
  //   console.log(trashPile)
  // }

  console.log('playerhand:', playerHand)

  useEffect(() => {
    console.log('draw', deck)
  }, [deal, playerHand])

  return (
    <div>
      <button onClick={() => setDrawDeck(deal(1))}>Draw</button>

      {drawDeck ? (
        drawDeck.map((card) => {
          return (
            <div>
              <button onClick={() => sendCardToPlayer(card)}>
                send to player
              </button>
              {/* <button onClick={() => sendToTrash(card)}> */}
              <button onClick={() => sendToDiscardPile(card)}>
                send to discard Pile
              </button>
              <img className="card" src={card.image} />
            </div>
          )
        })
      ) : (
        <p>no cards</p>
      )}

      <Table cardsOnTable={cardsOnTable} />

      <DiscardPile trashPile={trashPile} />

      <PlayersHand playerCards={playerHand} />
    </div>
  )
}

export default Game
