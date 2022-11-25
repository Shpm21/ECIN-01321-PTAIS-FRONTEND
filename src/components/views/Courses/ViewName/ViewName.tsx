import { getCapitalizeName } from '../../../../utils/validate'

interface Props {
  name: string
}

const ViewName: React.FC<Props> = ({ name }) => {
  return (
    <div>
      <p>Hola {getCapitalizeName(name)}</p>
    </div>
  )
}

export default ViewName
