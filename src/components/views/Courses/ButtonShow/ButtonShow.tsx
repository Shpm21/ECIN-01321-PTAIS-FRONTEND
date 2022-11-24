import React from 'react'
import './ButtonShow.css'
interface Props {
  handleButtonAsignatures: (event: any) => Promise<void>
}

const ButtonShow: React.FC<Props> = ({ handleButtonAsignatures }) => {
  return (
    <>
      <div className="button-container-show">
        <div className="button-show">
          <button className="button-EBL" onClick={handleButtonAsignatures}>
            Mostrar asignaturas
          </button>
        </div>
      </div>
    </>
  )
}

export default ButtonShow
