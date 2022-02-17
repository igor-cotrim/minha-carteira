import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const TitleContainer = styled.div`
  ${({ theme }) => css`
    
    > h1 {
      color: ${theme.colors.white};

      &::after{
        content: '';
        display: block;
        width: 55px;
        border-bottom: 10px solid ${theme.colors.warning};
      }
    }
  `}
`;

export const Controllers = styled.div`
`;
