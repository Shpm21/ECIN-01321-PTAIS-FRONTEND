import React from 'react'
import {
  CourseProps,
  SemesterProps,
  SemestersProps
} from '../../../../config/interfaces-templates'
import Semester from '../Semester/Semester'
import './TableSemesters.css'

interface Props {
  semesters: SemestersProps
  nextAsignatures: CourseProps[]
  handleSelectCourse: (course: CourseProps) => void
  selectCourse: CourseProps
}

const TableSemesters: React.FC<Props> = (Props) => {
  const { semesters } = Props.semesters
  return (
    <>
      <div>
        <table className="table-of-semesters">
          {semesters.map((sem: SemesterProps) => {
            return (
              <Semester
                semester={sem}
                handleSelectCourse={Props.handleSelectCourse}
                nextAsignatures={Props.nextAsignatures}
                selectCourse={Props.selectCourse}
              />
            )
          })}
        </table>
      </div>
    </>
  )
}

export default TableSemesters
