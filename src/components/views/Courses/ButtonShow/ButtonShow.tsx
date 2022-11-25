import React from 'react'
import './ButtonShow.css'
interface Props {
  handleButtonAsignatures: (event: any) => Promise<void>
  isVisible: boolean
}

const ButtonShow: React.FC<Props> = ({
  handleButtonAsignatures,
  isVisible
}) => {
  const message = isVisible ? 'Ocultar asignaturas' : 'Mostrar asignaturas'
  return (
    <>
      <div className="button-container-show">
        <div className="button-show">
          <button className="button-EBL" onClick={handleButtonAsignatures}>
            {message}
          </button>
        </div>
      </div>
    </>
  )
}

export default ButtonShow
