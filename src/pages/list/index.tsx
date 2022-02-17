import { useMemo } from "react"
import { useParams } from "react-router-dom"

import ContentHeader from "../../components/content-header"
import HistoryFinanceCard from "../../components/history-finance-card"
import SelectInput from "../../components/select-input"

import * as S from "./styled"

const List = () => {
  const { type } = useParams()

  const headerParams = useMemo(() => {
    return type === 'balanco-entrada' ? {
      title: 'Entradas',
      lineColor: '#f7931b'
    } : {
      title: 'Saídas',
      lineColor: '#e44c4e'
    }
  }, [type])

  const months = [
    { value: 7, label: 'Julho' },
    { value: 8, label: 'Agosto' },
    { value: 9, label: 'Setembro' },
  ]

  const years = [
    { value: 2021, label: 2021 },
    { value: 2020, label: 2020 },
    { value: 2019, label: 2019 },
  ]

  return (
    <S.Container>
      <ContentHeader
        title={headerParams.title}
        lineColor={headerParams.lineColor}
      >
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>

      <S.Filters>
        <button
          type="button"
          className="tag-filter tag-filter-recurrent"
        >
          Recorrents
        </button>
        <button
          type="button"
          className="tag-filter tag-filter-eventual"
        >
          Eventuais
        </button>
      </S.Filters>

      <S.Content>
        <HistoryFinanceCard
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