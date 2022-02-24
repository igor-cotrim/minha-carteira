import { useMemo, useState } from "react"

import ContentHeader from "../../components/content-header"
import MessageBox from "../../components/message-box"
import SelectInput from "../../components/select-input"
import WalletBox from "../../components/wallet-box"
import PieChartBox from "../../components/pie-chart-box"
import { listOfMonths } from "../../utils/months"

import expenses from "../../repositories/expenses"
import gains from "../../repositories/gains"

import HappySvg from '../../assets/svg-components/happy';
import SadSvg from "../../assets/svg-components/sad"
import GrinningSvg from "../../assets/svg-components/grinning"

import * as S from "./styled"
import HistoryBox from "../../components/history-box"
import BarChartBox from "../../components/bar-chart-box"

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

  const totalExpenses = useMemo(() => {
    let total: number = 0;

    expenses.forEach((item) => {
      const date = new Date(item.date)
      const year = date.getFullYear()
      const month = date.getMonth() + 1

      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount)
        } catch {
          throw new Error('Invalid amount! Amount be number.')
        }
      }
    })
    return total
  }, [monthSelected, yearSelected])

  const totalGains = useMemo(() => {
    let total: number = 0;

    gains.forEach((item) => {
      const date = new Date(item.date)
      const year = date.getFullYear()
      const month = date.getMonth() + 1

      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount)
        } catch {
          throw new Error('Invalid amount! Amount be number.')
        }
      }
    })
    return total
  }, [monthSelected, yearSelected])

  const totalBalance = useMemo(() => {
    return totalGains - totalExpenses
  }, [totalExpenses, totalGains])

  const message = useMemo(() => {
    if (totalBalance < 0) {
      return {
        title: "Que triste!",
        description: "Neste mês, você gastou mais do que deveria.",
        footerText: "Verifique seus gastos e tente cortar algumas coisas desnecessárias.",
        icon: < SadSvg />
      }
    } else if (totalBalance === 0) {
      return {
        title: "Ufaa!",
        description: "Neste mês, você gastou exatamente o que ganhou",
        footerText: "Tenha cuidado. No próximo mês tente poupar o seu dinheiro.",
        icon: < GrinningSvg />
      }
    } else {
      return {
        title: "Muito bem!",
        description: "Sua carteira está positiva.",
        footerText: "Continue assim. Considere investir o seu saldo.",
        icon: < HappySvg />
      }
    }
  }, [totalBalance])

  const relationExprensesVersusGains = useMemo(() => {
    const total = totalGains + totalExpenses
    const percentGains = (totalGains / total) * 100 || 0
    const percentExpenses = (totalExpenses / total) * 100 || 0

    const data = [
      {
        name: "Entradas",
        value: totalGains,
        percent: Number(percentGains.toFixed(1)),
        color: '#e44c4e'
      },
      {
        name: "Saídas",
        value: totalExpenses,
        percent: Number(percentExpenses.toFixed(1)),
        color: '#f7931b'
      },
    ]

    return data
  }, [totalGains, totalExpenses])

  const historyData = useMemo(() => {
    return listOfMonths
      .map((_, month) => {
        let amountEntry = 0
        gains.forEach((gain) => {
          const date = new Date(gain.date)
          const gainMonth = date.getMonth()
          const gainYear = date.getFullYear()

          if (gainMonth === month && gainYear === yearSelected) {
            try {
              amountEntry = amountEntry + Number(gain.amount)
            } catch {
              throw new Error('amountEntry is invalid. amountEntry must be number')
            }
          }
        })

        let amountOutput = 0
        expenses.forEach((expense) => {
          const date = new Date(expense.date)
          const expenseMonth = date.getMonth()
          const expenseYear = date.getFullYear()

          if (expenseMonth === month && expenseYear === yearSelected) {
            try {
              amountOutput = amountOutput + Number(expense.amount)
            } catch {
              throw new Error('amountOutput is invalid. amountOutput must be number')
            }
          }
        })

        return {
          monthNumber: month,
          month: listOfMonths[month].substring(0, 3),
          amountEntry,
          amountOutput
        }
      })
      .filter((item) => {
        const currentMonth = new Date().getMonth()
        const currentYear = new Date().getFullYear()

        return (
          (yearSelected === currentYear && item.monthNumber <= currentMonth) ||
          (yearSelected < currentYear)
        )
      })
  }, [yearSelected])

  const relationExpensevesRecurrentVesusEventual = useMemo(() => {
    let amountRecurrent = 0
    let amountEventual = 0

    expenses
      .filter((expense) => {
        const date = new Date(expense.date)
        const month = date.getMonth() + 1
        const year = date.getFullYear()

        return month === monthSelected && year === yearSelected
      })
      .forEach((expense) => {
        if (expense.frequency === 'recorrente') {
          return amountRecurrent = amountRecurrent + Number(expense.amount)
        }

        if (expense.frequency === 'eventual') {
          return amountEventual = amountEventual + Number(expense.amount)
        }
      })

    const total = amountRecurrent + amountEventual
    const percentRecurrent = (amountRecurrent / total) * 100 || 0
    const percentEventual = (amountEventual / total) * 100 || 0

    return [
      {
        name: 'Recorrentes',
        amount: amountRecurrent,
        percent: Number(percentRecurrent.toFixed(1)),
        color: '#f7931b'
      },
      {
        name: 'Eventuais',
        amount: amountEventual,
        percent: Number(percentEventual.toFixed(1)),
        color: '#e44c4e'
      },
    ]
  }, [monthSelected, yearSelected])

  const relationGainsRecurrentVesusEventual = useMemo(() => {
    let amountRecurrent = 0
    let amountEventual = 0

    gains
      .filter((gain) => {
        const date = new Date(gain.date)
        const month = date.getMonth() + 1
        const year = date.getFullYear()

        return month === monthSelected && year === yearSelected
      })
      .forEach((gain) => {
        if (gain.frequency === 'recorrente') {
          return amountRecurrent = amountRecurrent + Number(gain.amount)
        }

        if (gain.frequency === 'eventual') {
          return amountEventual = amountEventual + Number(gain.amount)
        }
      })

    const total = amountRecurrent + amountEventual
    const percentRecurrent = (amountRecurrent / total) * 100 || 0
    const percentEventual = (amountEventual / total) * 100 || 0

    return [
      {
        name: 'Recorrentes',
        amount: amountRecurrent,
        percent: Number(percentRecurrent.toFixed(1)),
        color: '#f7931b'
      },
      {
        name: 'Eventuais',
        amount: amountEventual,
        percent: Number(percentEventual.toFixed(1)),
        color: '#e44c4e'
      },
    ]
  }, [monthSelected, yearSelected])

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
      <S.Content>
        <WalletBox
          title="saldo"
          amount={totalBalance}
          footerLabel="Atualizado com base nas entradas e saídas"
          icon="dolar"
          color="#4e41f0"
        />
        <WalletBox
          title="entradas"
          amount={totalGains}
          footerLabel="Atualizado com base nas entradas e saídas"
          icon="arrowUp"
          color="#f7931b"
        />
        <WalletBox
          title="saídas"
          amount={totalExpenses}
          footerLabel="Atualizado com base nas entradas e saídas"
          icon="arrowDown"
          color="#e44c4e"
        />
        <MessageBox
          title={message.title}
          description={message.description}
          footerText={message.footerText}
          icon={message.icon}
        />
        <PieChartBox data={relationExprensesVersusGains} />
        <HistoryBox
          data={historyData}
          lineColorAmountEntry="#f7931b"
          lineColorAmountOutput="#e44c4e"
        />
        <BarChartBox
          data={relationExpensevesRecurrentVesusEventual}
          title="Saídas"
        />
        <BarChartBox
          data={relationGainsRecurrentVesusEventual}
          title="Entradas"
        />
      </S.Content>
    </S.Container>
  )
}

export default Dashboard