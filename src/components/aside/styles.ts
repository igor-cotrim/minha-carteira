import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({theme}) => css`
    grid-area: AS;
    color: ${theme.colors.white};
    background: ${theme.colors.secondary};
  `}
`;
