import styled, { css } from 'styled-components';
import media from 'styled-media-query';

type TitleContainerProps = {
  lineColor: string
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  
  justify-content: space-between;
  margin-bottom: 25px;

  ${media.lessThan("small")`
    flex-direction: column;
  `}
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

    ${media.lessThan("small")`
      > h1 {
        font-size: 22px;

        &::after{
          border-bottom: 5px solid ${lineColor};
        }
      }
    `}
  `}
`;

export const Controllers = styled.div`
  display: flex;
  
  ${media.lessThan("small")`
    width: 100%;
    justify-content: space-evenly;
    margin-top: 20px;
  `}
`;
