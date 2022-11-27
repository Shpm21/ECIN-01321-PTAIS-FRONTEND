import React, { useEffect, useState } from 'react'
import {
  getPrerequisites,
  getPrerequisitesByCodCourse
} from '../../../../api/request'
import {
  CourseProps,
  SemesterProps,
  Prerequisite
} from '../../../../config/interfaces-templates'
import ViewCourse from '../ViewCourse/ViewCourse'
import './Semester.css'

interface Props {
  semester: SemesterProps
  handleSelectCourse: (course: CourseProps) => void
  nextAsignatures: CourseProps[]
  selectCourse: CourseProps
}

const Semester: React.FC<Props> = (Props) => {
  const { semester, courses } = Props.semester
  const { nextAsignatures } = Props

  const [prerequisites, setPrerequisites] = useState<Prerequisite[]>([])

  const getCantTotalCredit = () => {
    let cantTotalCredit = 0
    courses.map((c: CourseProps) => {
      cantTotalCredit += c.credit
    })
    return cantTotalCredit
  }

  useEffect(() => {
    if (Props.selectCourse) {
      const getAllPrerequisites = async () => {
        const p = await getPrerequisitesByCodCourse(Props.selectCourse.cod)
        setPrerequisites(p)
      }

      getAllPrerequisites()
    }
  }, [nextAsignatures])

  const comparecodCourseWithPrerequisites = (codCourse: string) => {
    let result = false
    prerequisites.map((p) => {
      if (p.cod_course === codCourse) {
        result = true
      }
    })
    return result
  }

  return (
    <>
      <td className="semester-celd">
        <div className="semester-text">{semester}</div>
        {courses.map((c: CourseProps) => {
          return comparecodCourseWithPrerequisites(c.cod) ? (
            <ViewCourse
              course={c}
              handleSelectCourse={Props.handleSelectCourse}
              keySelected={'ss'}
            />
          ) : (
            <ViewCourse
              course={c}
              handleSelectCourse={Props.handleSelectCourse}
              keySelected={'s'}
            />
          )
        })}
        <div className="semester-credit-text">{getCantTotalCredit()}</div>
      </td>
    </>
  )
}

export default Semester
