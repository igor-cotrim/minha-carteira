import * as S from "./styles"

type HistoryFinanceCardProps = {
  cardColor: string
  tagColor: string
  title: string
  subtitle: string
  amount: string
}

const HistoryFinanceCard = ({
  cardColor,
  tagColor,
  title,
  subtitle,
  amount
}: HistoryFinanceCardProps) => {
  return (
    <S.Container color={cardColor}>
      <S.Tag color={tagColor} />
      <div>
        <span>{title}</span>
        <small>{subtitle}</small>
      </div>
      <h3>{amount}</h3>
    </S.Container>
  )
}

export default HistoryFinanceCard