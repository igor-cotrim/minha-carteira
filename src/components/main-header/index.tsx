import { useMemo } from "react"

import { emojis } from "../../utils/emojis"
import Toggle from "../toggle"

import * as S from "./styles"

const MainHeader = () => {
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length)

    return emojis[indice]
  }, [])

  return (
    <S.Container>
      <Toggle />
      <S.Profile>
        <S.Welcome>Olá, {emoji}</S.Welcome>
        <S.Username>Igor Cotrim</S.Username>
      </S.Profile>
    </S.Container>
  )
}

export default MainHeader