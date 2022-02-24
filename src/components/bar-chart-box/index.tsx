import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  // Tooltip
} from 'recharts'

// import { formatCurrency } from '../../utils/formatData'

import * as S from "./styles"

type BarChartBoxProps = {
  title: string
  data: {
    name: string
    amount: number
    percent: number
    color: string
  }[]
}

const BarChartBox = ({ data, title }: BarChartBoxProps) => (
  <S.Container>
    <S.SideLeft>
      <h2>{title}</h2>
      <S.LegendContainer>
        {data.map((indicator) => (
          <S.Legend key={indicator.name} color={indicator.color}>
            <div>{indicator.percent}%</div>
            <span>{indicator.name}</span>
          </S.Legend>
        ))}
      </S.LegendContainer>
    </S.SideLeft>
    <S.SideRight>
      <ResponsiveContainer>
        <BarChart data={data}>
          <Bar dataKey="amount">
            {data.map((indicator) => (
              <Cell
                key={indicator.name}
                cursor="pointer"
                fill={indicator.color}
              />
            ))}
          </Bar>
          {/* <Tooltip formatter={(value: any) => formatCurrency(Number(value))} /> */}
        </BarChart>
      </ResponsiveContainer>
    </S.SideRight>
  </S.Container>
)

export default BarChartBox