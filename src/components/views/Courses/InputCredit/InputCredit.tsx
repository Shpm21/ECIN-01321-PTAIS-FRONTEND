import './InputCredit.css'

interface Props {
  handleIsAverageApproval: (target: any) => void
}

const InputCredit: React.FC<Props> = ({ handleIsAverageApproval }) => {
  return (
    <>
      <div className="input-credit-container">
        <label htmlFor="input-credit">Utilizar 30 créditos</label>
        <input
          type="checkbox"
          className="input-credit"
          name="input-credit"
          onChange={handleIsAverageApproval}
        />
      </div>
    </>
  )
}

export default InputCredit
