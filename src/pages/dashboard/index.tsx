import { useMemo, useState } from "react"

import ContentHeader from "../../components/content-header"
import SelectInput from "../../components/select-input"
import expenses from "../../repositories/expenses"
import gains from "../../repositories/gains"
import { listOfMonths } from "../../utils/months"

import * as S from "./styled"

const Dashboard = () => {
  const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1)
  const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear())

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    [...expenses, ...gains].forEach((item) => {
      const date = new Date(item.date)
      const year = date.getFullYear()

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year)
      }
    })

    return uniqueYears.map((year) => {
      return {
        value: year,
        label: year,
      }
    })
  }, [])

  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month
      }
    })
  }, [])

  const handleMonthSelected = (month: string) => {
    try {
      const parseMonth = Number(month)
      setMonthSelected(parseMonth)
    } catch (error) {
      throw new Error('invalid month value. Is accept 0 - 12.')
    }
  }

  const handleYearSelected = (year: string) => {
    try {
      const parseYear = Number(year)
      setYearSelected(parseYear)
    } catch (error) {
      throw new Error('invalid year value. Is accept interger numbers.')
    }
  }

  return (
    <S.Container>
      <ContentHeader title="Dashboard" lineColor="#f7931b">
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
    </S.Container>
  )
}

export default Dashboard