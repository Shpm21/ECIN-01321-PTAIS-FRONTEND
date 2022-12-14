import React, { useEffect, useState } from 'react'
import { getPostRequisitesByCodCourse } from '../../../../api/request'
import {
  CourseProps,
  SemesterProps
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
  const { nextAsignatures, selectCourse, handleSelectCourse } = Props

  const [postRequisites, setPostRequisites] = useState<string[]>([])

  const getCantTotalCredit = () => {
    let cantTotalCredit = 0
    courses.map((c: CourseProps) => {
      cantTotalCredit += c.credit
    })
    return cantTotalCredit
  }

  useEffect(() => {
    if (selectCourse) {
      const getAllPostRequisites = async () => {
        const p = await getPostRequisitesByCodCourse(selectCourse.cod)
        setPostRequisites(p)
      }
      getAllPostRequisites()
    } else {
      setPostRequisites([])
    }
  }, [nextAsignatures])

  const comparecodCourseWithPrerequisites = (codCourse: string) => {
    let result = false
    postRequisites.map((pr: string) => {
      if (pr === codCourse) {
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
              handleSelectCourse={handleSelectCourse}
              keySelected={'ss'}
            />
          ) : (
            <ViewCourse
              course={c}
              handleSelectCourse={handleSelectCourse}
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
