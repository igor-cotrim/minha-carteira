import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip
} from 'recharts'

import { formatCurrency } from '../../utils/formatData'

import * as S from "./styles"

type HistoryBoxProps = {
  data: {
    month: string
    amountEntry: number
    amountOutput: number
  }[],
  lineColorAmountEntry: string
  lineColorAmountOutput: string
}

const HistoryBox = ({
  data,
  lineColorAmountEntry,
  lineColorAmountOutput
}: HistoryBoxProps) => (
  <S.Container>
    <S.Header>
      <h2>Histórico de saldo</h2>
      <S.LegendContainer>
        <S.Legend color={lineColorAmountEntry}>
          <div />
          <span>Entradas</span>
        </S.Legend>
        <S.Legend color={lineColorAmountOutput}>
          <div />
          <span>Saídas</span>
        </S.Legend>
      </S.LegendContainer>
    </S.Header>
    <ResponsiveContainer height={300}>
      <LineChart data={data} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke='#cecece' />
        <XAxis dataKey="month" stroke='#cecece' />
        <Tooltip formatter={(value: any) => formatCurrency(Number(value))} />
        <Line
          type="monotone"
          dataKey="amountEntry"
          name='Entradas'
          stroke={lineColorAmountEntry}
          strokeWidth={5}
          dot={{ r: 5 }}
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="amountOutput"
          name='Saídas'
          stroke={lineColorAmountOutput}
          strokeWidth={5}
          dot={{ r: 5 }}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  </S.Container>
)

export default HistoryBox
