import { useMemo } from "react"
import { emojis } from "../../utils/emojis"

import * as S from "./styles"

const MainHeader = () => {
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length)

    return emojis[indice]
  }, [])

  return (
    <S.Container>
      <h1>Toogle</h1>
      <S.Profile>
        <S.Welcome>Olá, {emoji}</S.Welcome>
        <S.Username>Igor Cotrim</S.Username>
      </S.Profile>
    </S.Container>
  )
}

export default MainHeader