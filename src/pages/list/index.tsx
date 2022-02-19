import { useEffect, useMemo, useState } from "react"
import { useParams } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"

import ContentHeader from "../../components/content-header"
import HistoryFinanceCard from "../../components/history-finance-card"
import SelectInput from "../../components/select-input"
import { formatCurrency, formatDate } from "../../utils/formatData"
import { listOfMonths } from "../../utils/months"

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
  const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1))
  const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()))
  const [selectedFrequency, setSelectedFrequency] = useState<string[]>(['recorrente', 'eventual'])

  const listData = useMemo(() => {
    return type === 'balanco-entrada' ? gains : expenses
  }, [type])

  const headerParams = useMemo(() => {
    return type === 'balanco-entrada' ? {
      title: 'Entradas',
      lineColor: '#f7931b'
    } : {
      title: 'Saídas',
      lineColor: '#e44c4e'
    }
  }, [type])

  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month
      }
    })
  }, [])

  const years = useMemo(() => {
    let uniqueYears: number[] = []

    listData.forEach((item) => {
      const date = new Date((item.date))
      const year = date.getFullYear()

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year)
      }
    })

    return uniqueYears.map((year) => {
      return {
        value: year,
        label: year
      }
    })
  }, [listData])

  const handleFrequencyClick = (frequency: string) => {
    const alreadySelected = selectedFrequency.findIndex((item) => item === frequency)

    if (alreadySelected >= 0) {
      const filtered = selectedFrequency.filter((item) => item !== frequency)
      setSelectedFrequency(filtered)
    } else {
      setSelectedFrequency((prev) => [...prev, frequency])
    }
  }

  useEffect(() => {
    const filteredDate = listData.filter((item) => {
      const date = new Date(item.date)
      const month = String(date.getMonth() + 1)
      const year = String(date.getFullYear())

      return month === monthSelected
        && year === yearSelected
        && selectedFrequency.includes(item.frequency)
    })

    const formattedData = filteredDate.map((item) => {
      return {
        id: uuidv4(),
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        type: item.type,
        frequency: item.frequency,
        dateFormatted: formatDate(item.date),
        tagColor: item.frequency === 'recorrente' ? '#4e41f0' : '#e44c4e'
      }
    })

    setData(formattedData)
  }, [listData, monthSelected, yearSelected, selectedFrequency])

  return (
    <S.Container>
      <ContentHeader
        title={headerParams.title}
        lineColor={headerParams.lineColor}
      >
        <SelectInput
          onChange={(e) => setMonthSelected(e.target.value)}
          defaultValue={monthSelected}
          options={months}
        />
        <SelectInput
          onChange={(e) => setYearSelected(e.target.value)}
          defaultValue={yearSelected}
          options={years}
        />
      </ContentHeader>

      <S.Filters>
        <button
          type="button"
          className={`${selectedFrequency.includes('recorrente') && 'tag-actived'} tag-filter tag-filter-recurrent`}
          onClick={() => handleFrequencyClick('recorrente')}
        >
          Recorrents
        </button>
        <button
          type="button"
          className={`${selectedFrequency.includes('eventual') && 'tag-actived'} tag-filter tag-filter-eventual`}
          onClick={() => handleFrequencyClick('eventual')}
        >
          Eventuais
        </button>
      </S.Filters>

      <S.Content>
        {data && data.map((item) => (
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