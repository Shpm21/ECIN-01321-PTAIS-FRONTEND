import React from 'react'
import './InputDispersion.css'
interface Props {
  handleDispersion: (target: any) => void
}

const InputDispersion: React.FC<Props> = ({ handleDispersion }) => {
  return (
    <>
      <div className="input-dispersion-container">
        <label htmlFor="select-dispersion">Dispersión: </label>
        <select name="select-dispersion" id="" onChange={handleDispersion}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>

          <option value="5">5</option>
        </select>
      </div>
    </>
  )
}

export default InputDispersion
