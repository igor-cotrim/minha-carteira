import * as S from "./styles"

type SelectInputProps = {
  options: {
    value: string | number
    label: string | number
  }[],
}

const SelectInput = ({ options }: SelectInputProps) => {
  return (
    <S.Container>
      <select>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </S.Container>
  )
}

export default SelectInput