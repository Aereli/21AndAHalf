const calculateUserCards = (cardsInHand) => {
  let hand = cardsInHand.length
  let cardsToPickUp

  if (hand < 6) {
    cardsToPickUp = 6 - hand
  } else {
    cardsToPickUp = 0
  }
  return cardsToPickUp
}

export default calculateUserCards
