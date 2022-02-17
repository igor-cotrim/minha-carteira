import styled, { css } from 'styled-components';

type TitleContainerProps = {
  lineColor: string
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const TitleContainer = styled.div<TitleContainerProps>`
  ${({ theme, lineColor }) => css`
    
    > h1 {
      color: ${theme.colors.white};

      &::after{
        content: '';
        display: block;
        width: 55px;
        border-bottom: 10px solid ${lineColor};
      }
    }
  `}
`;

export const Controllers = styled.div`
  display: flex;
`;
