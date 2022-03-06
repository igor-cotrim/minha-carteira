import { useMemo } from 'react'
import CountUp from 'react-countup'

import ArrowDownSvg from '../../assets/svg-components/arrow-down'
import ArrowUpSvg from '../../assets/svg-components/arrow-up'
import DollarSvg from '../../assets/svg-components/dollar'

import * as S from "./styles"

type WalletBoxProps = {
  title: string
  amount: number
  footerLabel: string
  color: string
  icon?: 'dolar' | 'arrowUp' | 'arrowDown'
}

const WalletBox = ({
  amount,
  footerLabel,
  icon,
  color,
  title
}: WalletBoxProps) => {

  const iconSelected = useMemo(() => {
    switch (icon) {
      case 'dolar':
        return <DollarSvg />
      case 'arrowUp':
        return <ArrowUpSvg />
      case 'arrowDown':
        return <ArrowDownSvg />
      default:
        return undefined
    }
  }, [icon])

  return (
    <S.Container color={color}>
      <span>{title}</span>
      <h1>
        <strong>R$ </strong>
        <CountUp
          end={amount}
          separator="."
          decimal=','
          decimals={2}
          preserveValue={true}
        />
      </h1>
      <small>{footerLabel}</small>
      {iconSelected}
    </S.Container>
  )
}

export default WalletBox