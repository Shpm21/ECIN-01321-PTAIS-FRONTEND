import React, { useState } from 'react'
import { Link, Navigate, NavLink, Router } from 'react-router-dom'
import { login } from '../../../api/login'
import { setToken } from '../../../api/request'
import { Student } from '../../../config/interfaces-templates'
import BackButton from '../../common/BackButton'
import ExitButton from '../../common/ExitButton'
import Logo from '../../common/Logo'
import Login from '../Login/Login'

import './Home.css'

const Home: React.FC = () => {
  const [rut, setRut] = useState('')
  const [student, setStudent] = useState<Student>()
  const [errorMessage, setErrorMessage] = useState('')

  const handleLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const student: Student = await login({ rutStudent: rut })
      const { token } = student
      setToken(token)
      setStudent(student)
      setRut('')
    } catch (error) {
      setErrorMessage('Acceso denegado. Por favor, inténtelo otra vez.')
      setTimeout(() => {
        setErrorMessage('')
      }, 10000)
    }
  }

  const handleButtonStatus = () => {
    setStudent({} as Student)
    setToken('')
  }
  return (
    <>
      <div className="Home">
        <div className="logo-container">
          <Logo />
        </div>
        {student || rut === 'ADMIN' ? (
          <Navigate to={`/courses/${student?.rut}`} />
        ) : (
          <Login
            errorMessage={errorMessage}
            handleSubmit={handleLoginSubmit}
            handleRutStudentChange={(event) =>
              setRut(event.target.value.toUpperCase())
            }
            rutStudent={rut}
          />
        )}
        <div className="exit-button-container">
          {student || rut === 'ADMIN' ? (
            <BackButton handleButtonStatus={handleButtonStatus} />
          ) : (
            <ExitButton />
          )}
        </div>
      </div>
    </>
  )
}

export default Home
