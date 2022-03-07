import { useState } from 'react'
import {
  MdDashboard,
  MdArrowUpward,
  MdArrowDownward,
  MdExitToApp,
  MdClose,
  MdMenu
} from 'react-icons/md'

import Toggle from '../toggle'
import { useAuth } from '../../hooks/useAuth'
import { useTheme } from '../../hooks/useTheme'

import * as S from "./styles"

const Aside = () => {
  const { signOut } = useAuth()
  const { toggleTheme, theme } = useTheme()
  const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false)
  const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false)

  const handleToggleMenu = () => {
    setToggleMenuIsOpened(!toggleMenuIsOpened)
  }

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme)
    toggleTheme()
  }

  return (
    <S.Container menuIsOpen={toggleMenuIsOpened}>
      <S.Header>
        <S.ToggleMenu onClick={handleToggleMenu}>
          {toggleMenuIsOpened ? <MdClose /> : <MdMenu />}
        </S.ToggleMenu>
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

      <S.ThemeToggleFooter menuIsOpen={toggleMenuIsOpened}>
        <Toggle
          labelLeft="Light"
          labelRight="Dark"
          checked={darkTheme}
          onChange={handleChangeTheme}
        />
      </S.ThemeToggleFooter>
    </S.Container>
  )
}

export default Aside