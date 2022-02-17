import {
  MdDashboard,
  MdArrowUpward,
  MdArrowDownward,
  MdExitToApp
} from 'react-icons/md'

import * as S from "./styles"

const Aside = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Logo />
        <S.Title>Minha Carteira</S.Title>
      </S.Header>

      <S.MenuContainer>
        <S.MenuItemLink href="#">
          <MdDashboard />
          Dashboard
        </S.MenuItemLink>
        <S.MenuItemLink href="#">
          <MdArrowUpward />
          Entradas
        </S.MenuItemLink>
        <S.MenuItemLink href="#">
          <MdArrowDownward />
          Saídas
        </S.MenuItemLink>
        <S.MenuItemLink href="#">
          <MdExitToApp />
          Sair
        </S.MenuItemLink>
      </S.MenuContainer>
    </S.Container>
  )
}

export default Aside