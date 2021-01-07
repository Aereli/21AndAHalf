import React from 'react'

const DiscardPile = ({ trashPile }) => {
  return (
    <div>
      <h1>Discard Pile</h1>
      {trashPile.map((trashCard) => {
        return (
          <>
            <div>
              <img className="card" src={trashCard.image} />
            </div>
          </>
        )
      })}
    </div>
  )
}

export default DiscardPile
