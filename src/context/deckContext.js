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
  const [cardsOnTable, setCardsOnTable] = useState([[], [], [], []])
  const [bankedCards, setBankedCards] = useState([[], [], [], []])
  const [playerHand, setPlayerHand] = useState([])

  useEffect(() => {
    if (deck.length === 0) setDeck(null)
  }, [deck.length])

  const sendToTableOrBank = (card, slot) => {
    let cardIndex = playerHand.indexOf(card)
    if (card.area === 'bank') {
      bankedCards[slot].push(card)
    } else cardsOnTable[slot].push(card)

    playerHand.splice(cardIndex, 1)
    setPlayerHand([...playerHand])
    return { cardsOnTable, bankedCards }
  }

  const deal = (number) => {
    const dealOut = deck.splice(0, number)
    setDeck([...deck])
    return dealOut
  }

  return (
    <DeckContext.Provider
      value={{
        deal,
        deck,
        cardsOnTable,
        setPlayerHand,
        playerHand,
        bankedCards,
        sendToTableOrBank,
      }}
    >
      {children}
    </DeckContext.Provider>
  )
}
