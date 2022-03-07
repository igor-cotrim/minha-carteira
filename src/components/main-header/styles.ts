import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    grid-area: MH;
    background: ${theme.colors.secondary};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    border-bottom: 1px solid ${theme.colors.gray};
  `}
`;
export const Profile = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`;

export const Welcome = styled.h3``;

export const Username = styled.span``;
