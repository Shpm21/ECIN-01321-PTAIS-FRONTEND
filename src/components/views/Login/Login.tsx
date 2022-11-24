import React from 'react'
import ErrorMessage from './ErrorMessage/ErrorMessage'
import './Login.css'

interface Props {
  errorMessage: string
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  handleRutStudentChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  rutStudent: string
}

const Login: React.FC<Props> = (Props) => {
  const { errorMessage, handleSubmit, handleRutStudentChange, rutStudent } =
    Props

  return (
    <>
      <div className="container-log">
        <div className="login">
          {errorMessage ? <ErrorMessage errorMessage={errorMessage} /> : <></>}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={rutStudent}
              name="RutStudent"
              placeholder="Rut: 11111111K"
              onChange={handleRutStudentChange}
            />
            <button className="button-log">Acceder</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
