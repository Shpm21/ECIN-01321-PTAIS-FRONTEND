import { getCapitalizeName } from '../../../../utils/validate'
interface Props {
  name: string
}

const ViewName: React.FC<Props> = ({ name }) => {
  return (
    <div className="information-container-item">
      <p>Hola {getCapitalizeName(name)}</p>
    </div>
  )
}

export default ViewName
