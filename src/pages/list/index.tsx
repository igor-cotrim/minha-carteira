import ContentHeader from "../../components/content-header"
import HistoryFinanceCard from "../../components/history-finance-card"
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
      <S.Content>
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de luz"
          subtitle="17/02/2022"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de luz"
          subtitle="17/02/2022"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de luz"
          subtitle="17/02/2022"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de luz"
          subtitle="17/02/2022"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de luz"
          subtitle="17/02/2022"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de luz"
          subtitle="17/02/2022"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de luz"
          subtitle="17/02/2022"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de luz"
          subtitle="17/02/2022"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de luz"
          subtitle="17/02/2022"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de luz"
          subtitle="17/02/2022"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de luz"
          subtitle="17/02/2022"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de luz"
          subtitle="17/02/2022"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de luz"
          subtitle="17/02/2022"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de luz"
          subtitle="17/02/2022"
          amount="R$ 130,00"
        />
      </S.Content>
    </S.Container>
  )
}

export default List