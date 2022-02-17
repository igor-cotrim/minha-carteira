import ContentHeader from "../../components/content-header"
import SelectInput from "../../components/select-input"

import * as S from "./styled"

const List = () => {
  const options = [
    { value: 'Igor', label: 'Igor' },
    { value: 'Thiago', label: 'Thiago' },
    { value: 'Felipe', label: 'Felipe' },
  ]

  return (
    <S.Container>
      <ContentHeader title="Saídas" lineColor="#e44c4e">
        <SelectInput options={options} />
      </ContentHeader>
    </S.Container>
  )
}

export default List