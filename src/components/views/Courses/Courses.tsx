import { isVisible } from '@testing-library/user-event/dist/utils'
import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import {
  getAverageApproval,
  getPersonsByRut,
  getStudyPlain,
  setToken
} from '../../../api/request'
import { SemestersProps } from '../../../config/interfaces-templates'
import semestersDb from '../../../db/db'
import { getCapitalizeName } from '../../../utils/validate'
import BackButton from '../../common/BackButton'
import Logo from '../../common/Logo'
import ButtonShow from './ButtonShow/ButtonShow'
import './Courses.css'
import InputCredit from './InputCredit/InputCredit'
import InputDispersion from './InputDispersion/InputDispersion'
import TableSemesters from './TableSemesters/TableSemesters'

const Courses: React.FC = () => {
  const rutStudent = useParams<{ rutStudent: string }>()
  const [name, setName] = useState('')
  const [averageApproval, setAverageApproval] = useState(0)
  const [isAverageApproval, setIsAverageApproval] = useState(false)
  const [semesters, setSemesters] = useState<SemestersProps>()
  const [dispersion, setDispersion] = useState(1)
  const [semestersDB, setSemestersDB] = useState<SemestersProps>()
  const [isBackToHome, setIsBackToHome] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const s = semestersDb
    setSemestersDB(s)
  }, [])

  useEffect(() => {
    const fetName = async () => {
      try {
        const { name } = await getPersonsByRut(rutStudent.rutStudent!)
        setName(name)
      } catch (error) {
        setErrorMessage('Página no encontrada')
      }
    }

    const fetchAverageApproval = async () => {
      try {
        const averageApproval = await getAverageApproval(rutStudent.rutStudent!)
        setAverageApproval(averageApproval)
      } catch (error) {
        setErrorMessage('Página no encontrada')
      }
    }

    fetName()
    fetchAverageApproval()
  }, [])

  const handleButtonAsignatures = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()
    try {
      const studyPlain = await getStudyPlain(
        rutStudent.rutStudent!,
        isAverageApproval,
        dispersion
      )
      setSemesters(studyPlain)
      setIsVisible(!isVisible)
    } catch (error) {
      setErrorMessage('Página no encontrada')
    }
  }

  const handleButtonStatus = () => {
    setToken('')
    setIsBackToHome(true)
  }

  return (
    <>
      {errorMessage ? <Navigate to="/404" /> : <></>}
      {isBackToHome ? <Navigate to={'/home'} /> : null}
      {rutStudent.rutStudent === 'ADMIN' ? (
        <>
          <div className="list-container">
            <div className="logo-container">
              <Logo />
            </div>
            <p>Hola {getCapitalizeName('ADMIN')}</p>
            <div className="information-container">
              <div className="information-container-item">
                <p>Promedio de créditos aprobados: 30</p>
              </div>
              <div className="information-container-item">
                <InputCredit
                  handleIsAverageApproval={({ target }) => {
                    setIsAverageApproval(target.checked)
                  }}
                />
              </div>
              <div className="information-container-item">
                <InputDispersion
                  handleDispersion={({ target }) => {
                    setDispersion(parseInt(target.value))
                  }}
                />
              </div>
            </div>
            <ButtonShow
              handleButtonAsignatures={handleButtonAsignatures}
              isVisible={isVisible}
            />
            {semestersDB && isVisible ? (
              <>
                <div className="scroll-container">
                  <TableSemesters semesters={semestersDB!} />
                  <TableSemesters semesters={semestersDB!} />
                  <TableSemesters semesters={semestersDB!} />
                  <TableSemesters semesters={semestersDB!} />
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
          <BackButton handleButtonStatus={handleButtonStatus} />
        </>
      ) : (
        <>
          <div className="list-container">
            <div className="logo-container">
              <Logo />
            </div>
            <p>Hola {getCapitalizeName(name)}</p>
            <div className="information-container">
              <p>Promedio de créditos aprobados: {averageApproval}</p>
              <InputCredit
                handleIsAverageApproval={({ target }) => {
                  setIsAverageApproval(target.checked)
                }}
              />
              <InputDispersion
                handleDispersion={({ target }) => {
                  setDispersion(parseInt(target.value))
                }}
              />
            </div>
            <ButtonShow
              handleButtonAsignatures={handleButtonAsignatures}
              isVisible={isVisible}
            />
            {semesters && isVisible ? (
              <>
                <div className="scroll-container">
                  <TableSemesters semesters={semesters} />
                  <TableSemesters semesters={semesters} />
                  <TableSemesters semesters={semesters} />
                  <TableSemesters semesters={semesters} />
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
          <BackButton handleButtonStatus={handleButtonStatus} />
        </>
      )}
    </>
  )
}

export default Courses
