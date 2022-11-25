interface Props {
  totalCredits: number
}

const ViewTotalCredits: React.FC<Props> = ({ totalCredits }) => {
  return (
    <>
      <div className="information-container-item">
        <p>Promedio de créditos aprobados: {totalCredits}</p>
      </div>
    </>
  )
}

export default ViewTotalCredits
