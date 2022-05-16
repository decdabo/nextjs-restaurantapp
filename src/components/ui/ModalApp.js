import React from 'react'

export const ModalApp = ({ toggleModal }) => {
  return (
    <div className="modal" onClick={ toggleModal }>
      <div>
        <button>✖</button>
        <h1>Proximamente</h1>
        <hr />
        <p>Con Nodemailer</p>
      </div>
    </div>
  )
}
