import React from 'react'
import {
  SemesterProps,
  SemestersProps
} from '../../../../config/interfaces-templates'
import Semester from '../Semester/Semester'
import './TableSemesters.css'
interface Props {
  semesters: SemestersProps
}

const TableSemesters: React.FC<Props> = (Props) => {
  const { semesters } = Props.semesters
  return (
    <>
      <div>
        <p>
          Con base en tu rendimiento académico y a tus elecciones anteriores, te
          recomiendo llevar este orden de asignaturas
        </p>
        <table className="table-of-semesters">
          {semesters.map((sem: SemesterProps) => {
            return <Semester semester={sem} />
          })}
        </table>
      </div>
    </>
  )
}

export default TableSemesters
