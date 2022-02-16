import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({theme}) => css`
    grid-area: MH;
    color: ${theme.colors.white};
    background: ${theme.colors.secondary};
  `}
`;
