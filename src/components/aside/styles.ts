import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import LogoSvg from '../../assets/svg-components/logo';

type ContainerProps = {
  menuIsOpen: boolean
}

type ThemeToggleFooterProps = {
  menuIsOpen: boolean
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, menuIsOpen }) => css`
    grid-area: AS;
    background: ${theme.colors.secondary};
    padding-left: 20px;
    border-right: 1px solid ${theme.colors.gray};
    position: relative;

    ${media.lessThan("medium")`
      padding-left: 20px;
      position: fixed;
      z-index: 2;
      width: 180px;

      height: ${menuIsOpen ? '100vh' : '70px'};
      overflow: hidden;

      ${!menuIsOpen && css`
        border: none;
        border-bottom: 1px solid ${theme.colors.gray};
      `}
    `}
  `}
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 70px;
`;

export const ToggleMenu = styled.button`
  ${({ theme }) => css`
    display: none;
    width: 40px;
    height: 40px;
    border-radius: 5px;
    font-size: 22px;
    background: ${theme.colors.warning};
    color: ${theme.colors.white};
    transition: opacity 0.3s;

    &:hover{
      opacity: 0.7;
    }

    ${media.lessThan("medium")`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
  `}
`;

export const Logo = styled(LogoSvg)`
  width: 40px;
  height: 40px;

  ${media.lessThan("medium")`
    display: none;
  `}
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    margin-left: 10px;

    ${media.lessThan("medium")`
      display: none;
    `}
  `}
`;

export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const MenuItemLink = styled(Link)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    color: ${theme.colors.info};
    text-decoration: none;
    transition: opacity 0.3s;
    margin: 7px 0;

    &:hover{
      opacity: 0.7;
    }

    > svg {
      font-size: 18px;
      margin-right: 5px;
    }
  `}
`;

export const MenuItemButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    color: ${theme.colors.info};
    font-size: 16px;
    border: none;
    background: none;
    transition: opacity 0.3s;
    margin: 7px 0;

    &:hover{
      opacity: 0.7;
    }

    > svg {
      font-size: 18px;
      margin-right: 5px;
    }
  `}
`;

export const ThemeToggleFooter = styled.footer<ThemeToggleFooterProps>`
  ${({ menuIsOpen }) => css`
    display: none;
    position: absolute;
    bottom: 30px;

    ${media.lessThan("medium")`
      display: ${menuIsOpen ? 'flex' : 'none'};
    `}
  `}
`;
