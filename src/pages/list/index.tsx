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
  const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1)
  const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear())
  const [frequencyFilterSelected, setFrequencyFilterSelected] = useState<string[]>(['recorrente', 'eventual'])

  const pageData = useMemo(() => {
    return type === 'balanco-entrada' ? {
      title: 'Entradas',
      lineColor: '#4e41f0',
      data: gains
    } : {
      title: 'Saídas',
      lineColor: '#e44c4e',
      data: expenses
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
    const { data } = pageData
    let uniqueYears: number[] = []

    data.forEach((item) => {
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
  }, [pageData])

  const handleFrequencyClick = (frequency: string) => {
    const alreadySelected = frequencyFilterSelected.findIndex((item) => item === frequency)

    if (alreadySelected >= 0) {
      const filtered = frequencyFilterSelected.filter((item) => item !== frequency)
      setFrequencyFilterSelected(filtered)
    } else {
      setFrequencyFilterSelected((prev) => [...prev, frequency])
    }
  }

  const handleMonthSelected = (month: string) => {
    try {
      const parseMonth = Number(month)
      setMonthSelected(parseMonth)
    } catch {
      throw new Error('invalid month value. Is accept 0 - 12.')
    }
  }

  const handleYearSelected = (year: string) => {
    try {
      const parseYear = Number(year)
      setYearSelected(parseYear)
    } catch {
      throw new Error('invalid year value. Is accept interger numbers.')
    }
  }

  useEffect(() => {
    const { data } = pageData

    const filteredDate = data.filter((item) => {
      const date = new Date(item.date)
      const month = date.getMonth() + 1
      const year = date.getFullYear()

      return month === monthSelected
        && year === yearSelected
        && frequencyFilterSelected.includes(item.frequency)
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
  }, [pageData, monthSelected, yearSelected, frequencyFilterSelected])

  return (
    <S.Container>
      <ContentHeader
        title={pageData.title}
        lineColor={pageData.lineColor}
      >
        <SelectInput
          onChange={(e) => handleMonthSelected(e.target.value)}
          defaultValue={monthSelected}
          options={months}
        />
        <SelectInput
          onChange={(e) => handleYearSelected(e.target.value)}
          defaultValue={yearSelected}
          options={years}
        />
      </ContentHeader>

      <S.Filters>
        <button
          type="button"
          className={`${frequencyFilterSelected.includes('recorrente') && 'tag-actived'} tag-filter tag-filter-recurrent`}
          onClick={() => handleFrequencyClick('recorrente')}
        >
          Recorrents
        </button>
        <button
          type="button"
          className={`${frequencyFilterSelected.includes('eventual') && 'tag-actived'} tag-filter tag-filter-eventual`}
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