import { useEffect, useMemo, useState } from "react"
import { useParams } from "react-router-dom"

import ContentHeader from "../../components/content-header"
import HistoryFinanceCard from "../../components/history-finance-card"
import SelectInput from "../../components/select-input"
import { formatCurrency, formatDate } from "../../utils/formatData"

import expenses from "../../repositories/expenses"
import gains from "../../repositories/gains"

import * as S from "./styled"

type DataProps = {
  id: string
  description: string
  amountFormatted: string
  type: string
  frequency: string
  dateFormatted: string
  tagColor: string
}

const List = () => {
  const { type } = useParams()
  const [data, setData] = useState<DataProps[]>([])

  const listData = useMemo(() => {
    return type === 'balanco-entrada' ? gains : expenses
  }, [type])

  useEffect(() => {
    const response = listData.map((item, index) => {
      return {
        id: String(index),
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        type: item.type,
        frequency: item.frequency,
        dateFormatted: formatDate(item.date),
        // dateFormatted: item.date,
        tagColor: item.frequency === 'recorrente' ? '#4e41f0' : '#e44c4e'
      }
    })

    setData(response)
  }, [listData, data.length])

  console.log(data);


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
        {data.map((item) => (
          <HistoryFinanceCard
            key={item.id}
            tagColor={item.tagColor}
            title={item.description}
            subtitle={item.dateFormatted}
            amount={item.amountFormatted}
          />
        ))}
      </S.Content>
    </S.Container>
  )
}

export default List