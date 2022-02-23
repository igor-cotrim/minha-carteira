import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts'

import * as S from "./styles"

type PieChartProps = {
  data: {
    name: string,
    value: number,
    percent: number,
    color: string
  }[]
}

const PieChartBox = ({ data }: PieChartProps) => (
  <S.Container>
    <S.SideLeft>
      <h2>Relação</h2>
      <S.LegendContainer>
        {data.map((indicator) => (
          <S.Legend key={indicator.name} color={indicator.color}>
            <div>{indicator.percent}</div>
            <span>{indicator.name}</span>
          </S.Legend>
        ))}
      </S.LegendContainer>
    </S.SideLeft>
    <S.SideRight>
      <ResponsiveContainer >
        <PieChart>
          <Pie
            data={data}
            labelLine={false}
            dataKey="percent"
          >
            {data.map((indicator) => (
              <Cell key={indicator.name} fill={indicator.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </S.SideRight>
  </S.Container>
)

export default PieChartBox