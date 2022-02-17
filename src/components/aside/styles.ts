import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import LogoSvg from '../../assets/svg-components/logo';

export const Container = styled.div`
  ${({ theme }) => css`
    grid-area: AS;
    background: ${theme.colors.secondary};
    padding-left: 20px;
    border-right: 1px solid ${theme.colors.gray};
  `}
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 70px;
`;

export const Logo = styled(LogoSvg)`
  width: 40px;
  height: 40px;
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    margin-left: 10px;
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
