import * as S from "./styles"

type HistoryFinanceCardProps = {
  tagColor: string
  title: string
  subtitle: string
  amount: string
}

const HistoryFinanceCard = ({
  tagColor,
  title,
  subtitle,
  amount
}: HistoryFinanceCardProps) => (
  <S.Container>
    <S.Tag color={tagColor} />
    <div>
      <span>{title}</span>
      <small>{subtitle}</small>
    </div>
    <h3>{amount}</h3>
  </S.Container>
)

export default HistoryFinanceCard