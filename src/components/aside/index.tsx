import {
  MdDashboard,
  MdArrowUpward,
  MdArrowDownward,
  MdExitToApp
} from 'react-icons/md'

import { useAuth } from '../../hooks/useAuth'

import * as S from "./styles"

const Aside = () => {
  const { signOut } = useAuth()

  return (
    <S.Container>
      <S.Header>
        <S.Logo />
        <S.Title>Minha Carteira</S.Title>
      </S.Header>

      <S.MenuContainer>
        <S.MenuItemLink to="/">
          <MdDashboard />
          Dashboard
        </S.MenuItemLink>
        <S.MenuItemLink to="/lista/balanco-entrada">
          <MdArrowUpward />
          Entradas
        </S.MenuItemLink>
        <S.MenuItemLink to="/lista/balanco-saida">
          <MdArrowDownward />
          Saídas
        </S.MenuItemLink>
        <S.MenuItemButton onClick={signOut}>
          <MdExitToApp />
          Sair
        </S.MenuItemButton>
      </S.MenuContainer>
    </S.Container>
  )
}

export default Aside