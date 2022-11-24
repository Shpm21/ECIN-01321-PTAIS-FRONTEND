import React from 'react'
import {
  CourseProps,
  SemesterProps
} from '../../../../config/interfaces-templates'

import ViewCourse from '../ViewCourse/ViewCourse'
import './Semester.css'
interface Props {
  semester: SemesterProps
}

const Semester: React.FC<Props> = (Props) => {
  const { semester, courses } = Props.semester

  const getCantTotalCredit = () => {
    let cantTotalCredit = 0
    courses.map((c: CourseProps) => {
      cantTotalCredit += c.credit
    })
    return cantTotalCredit
  }

  return (
    <>
      <td className="semester-celd">
        <div className="semester-text">{semester}</div>
        {courses.map((c: CourseProps) => {
          return <ViewCourse course={c} />
        })}
        <div className="semester-credit-text">{getCantTotalCredit()}</div>
      </td>
    </>
  )
}

export default Semester
