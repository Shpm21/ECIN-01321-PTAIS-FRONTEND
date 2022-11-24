import React from 'react'
import './ExitButton.css'
const ExitButton: React.FC = () => {
  const handleExitButton = () => {
    window.close()
  }

  return (
    <>
      <div className="button-container">
        <div className="button">
          <button className="button-EB" onClick={handleExitButton}>
            Salir
          </button>
        </div>
      </div>
    </>
  )
}

export default ExitButton
