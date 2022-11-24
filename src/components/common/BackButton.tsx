import React from 'react'

import './BackButton.css'

interface Props {
  handleButtonStatus: () => void
}

const BackButton: React.FC<Props> = ({ handleButtonStatus }) => {
  return (
    <>
      <div className="button-container">
        <div className="button">
          <button className="button-back" onClick={handleButtonStatus}>
            Regresar
          </button>
        </div>
      </div>
    </>
  )
}

export default BackButton
