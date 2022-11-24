import React from 'react'
import './ErrorMessage.css'
interface Props {
  errorMessage: string
}

const ErrorMessage: React.FC<Props> = (Props) => {
  const { errorMessage } = Props

  return (
    <>
      <div className="e-message-container">{errorMessage}</div>
    </>
  )
}

export default ErrorMessage
