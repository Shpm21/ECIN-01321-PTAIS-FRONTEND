interface Props {
  handleGoToMainPageButton: () => void
}

const GoToMainPageButton: React.FC<Props> = ({ handleGoToMainPageButton }) => {
  return (
    <>
      <div className="button-container">
        <div className="button">
          <button className="button-EB" onClick={handleGoToMainPageButton}>
            Ir a la página principal
          </button>
        </div>
      </div>
    </>
  )
}

export default GoToMainPageButton
