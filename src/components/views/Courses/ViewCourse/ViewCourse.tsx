import React from 'react'
import { CourseProps } from '../../../../config/interfaces-templates'
import './ViewCourse.css'

interface Props {
  course: CourseProps
}

const ViewCourse: React.FC<Props> = (Props) => {
  const { semester, name, credit } = Props.course
  return (
    <div className="box-container">
      <div className="box-semester">{semester}</div>
      <div className="box-name">{name}</div>
      <div className="box-credits">{credit}</div>
    </div>
  )
}

export default ViewCourse
