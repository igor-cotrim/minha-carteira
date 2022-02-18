import ContentHeader from "../../components/content-header"
import SelectInput from "../../components/select-input"

import * as S from "./styled"

const Dashboard = () => {
  const options = [
    { value: 'Igor', label: 'Igor' },
    { value: 'Thiago', label: 'Thiago' },
    { value: 'Felipe', label: 'Felipe' },
  ]

  return (
    <S.Container>
      <ContentHeader title="Dashboard" lineColor="#f7931b">
        <SelectInput options={options} onChange={() => { }} />
      </ContentHeader>
    </S.Container>
  )
}

export default Dashboard