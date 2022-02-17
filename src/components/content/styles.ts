import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    grid-area: CT;
    color: ${theme.colors.white};
    background: ${theme.colors.primary};
    padding: 25px;
  `}
`;
