import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    grid-area: CT;
    color: ${theme.colors.white};
    background: ${theme.colors.primary};
    padding: 25px;
    height: calc(100vh - 70px);
    overflow-y: scroll;

    ::-webkit-scrollbar{
      width: 10px;
    }

    ::-webkit-scrollbar-thumb{
      background: ${theme.colors.secondary};
      border-radius: 10px;
    }

    ::-webkit-scrollbar-track{
      background: ${theme.colors.tertiary};
      border-radius: 10px;
    }
  `}
`;
