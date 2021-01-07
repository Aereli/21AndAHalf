import React, { createContext, useState, useEffect } from 'react'
import PlayersHand from '../components/PlayersHand'

export const DeckContext = createContext()

const shuffledDeck = () => {
  const cards = []
  const decks = [1]
  const values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
  const suits = ['H', 'S', 'C', 'D']
  decks.forEach((deck) => {
    values.forEach((value) => {
      suits.forEach((suit) => {
        cards.push({
          suit,
          value,
          image: `https://deckofcardsapi.com/static/img/${
            (value === 10 ? 0 : value) + suit
          }.png`,
          code: value + suit + deck,
        })
      })
    })
  })
  return cards.sort(() => 0.5 - Math.random())
}

export const DeckContextProvider = ({ children }) => {
  const [deck, setDeck] = useState(shuffledDeck())
  const [cardsOnTable, setCardsOnTable] = useState([])
  const [trashPile, setTrashPile] = useState([])
  const [playerHand, setPlayerHand] = useState([])

  useEffect(() => {
    if (deck.length === 0) setDeck(null)
  }, [deck.length])

  const table = (chosenCards) => {
    setCardsOnTable([...cardsOnTable, chosenCards])
    return cardsOnTable
  }

  const deal = (number) => {
    const dealOut = deck.splice(0, number)
    setDeck([...deck])
    return dealOut
  }

  const sendToDiscardPile = (card) => {
    const removeCard = deck.filter((check) => check === card)
    setTrashPile([...trashPile, removeCard])
    return trashPile
  }

  const sendCardToPlayer = (card) => {
    let cardIndex = deck.indexOf(card)
    deck.splice(cardIndex, 1)
    console.log('deck', deck)
    setPlayerHand([...playerHand, card])
    return playerHand
  }

  return (
    <DeckContext.Provider
      value={{
        deal,
        table,
        cardsOnTable,
        sendCardToPlayer,
        playerHand,
        sendToDiscardPile,
        trashPile,
      }}
    >
      {children}
    </DeckContext.Provider>
  )
}
