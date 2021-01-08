import React, { createContext, useState, useEffect } from 'react'

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
  // const [discardedCards, setDiscardedCards] = useState([])
  const [playerHand, setPlayerHand] = useState([])
  const [bankedCards, setBankedcards] = useState([])

  useEffect(() => {
    if (deck.length === 0) setDeck(null)
  }, [deck.length])

  const sendToTable = (card) => {
    let cardIndex = playerHand.indexOf(card)
    playerHand.splice(cardIndex, 1)
    setPlayerHand([...playerHand])
    setCardsOnTable([...cardsOnTable, card])
    return { cardsOnTable, playerHand }
  }

  const deal = (number) => {
    const dealOut = deck.splice(0, number)
    setDeck([...deck])
    return dealOut
  }

  const sendToBank = (card) => {
    let cardIndex = deck.indexOf(card)
    playerHand.splice(cardIndex, 1)
    setPlayerHand([...playerHand])
    setBankedcards([...bankedCards, card])
    return bankedCards
  }

  return (
    <DeckContext.Provider
      value={{
        deal,
        deck,
        sendToTable,
        cardsOnTable,
        setPlayerHand,
        playerHand,
        sendToBank,
        bankedCards,
      }}
    >
      {children}
    </DeckContext.Provider>
  )
}
