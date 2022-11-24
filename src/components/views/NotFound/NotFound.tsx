import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import GoToMainPageButton from '../../common/GoToMainPageButton'
import Logo from '../../common/Logo'
import './NotFound.css'

const NotFound: React.FC = () => {
  const [isBackToHome, setIsBackToHome] = useState(false)

  const handleGoToMainPageButton = () => {
    setIsBackToHome(true)
  }
  return (
    <div className="not-found">
      <div className="logo-container">
        <Logo />
      </div>
      {isBackToHome ? <Navigate to={'/home'} /> : null}
      <div className="not-found-container">
        <h1>Oops!</h1>
        <h2>La página que buscas no existe :(</h2>
      </div>
      <div className="exit-button-container">
        <GoToMainPageButton
          handleGoToMainPageButton={handleGoToMainPageButton}
        />
      </div>
    </div>
  )
}

export default NotFound
