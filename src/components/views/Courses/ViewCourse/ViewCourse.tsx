import React from 'react'
import { CourseProps } from '../../../../config/interfaces-templates'
import './ViewCourse.css'

interface Props {
  course: CourseProps
  handleSelectCourse: (course: CourseProps) => void
  keySelected: string
}

const ViewCourse: React.FC<Props> = (Props) => {
  const { semester, name, credit } = Props.course
  return Props.keySelected === 'ss' ? (
    <div
      className="box-container-selected"
      onClick={() => Props.handleSelectCourse(Props.course)}
    >
      <div className="box-semester">{semester}</div>
      <div className="box-name">{name}</div>
      <div className="box-credits">{credit}</div>
    </div>
  ) : (
    <div
      className="box-container"
      onClick={() => Props.handleSelectCourse(Props.course)}
    >
      <div className="box-semester">{semester}</div>
      <div className="box-name">{name}</div>
      <div className="box-credits">{credit}</div>
    </div>
  )
}

export default ViewCourse
