import styled, { css, keyframes } from 'styled-components';
import media from 'styled-media-query';

type ContainerProps = {
  color: string
}

const animate = keyframes`
  0%{
    transform: translateX(100px);
    opacity: 0;
  }
  50%{     
    opacity: .3;
  }
  100%{
    transform: translateX(0px);
    opacity: 1;
  }
`;

export const Container = styled.div<ContainerProps>`
  ${({ theme, color }) => css`
    position: relative;
    width: 32%;
    height: 150px;
    margin: 10px 0;
    color: ${theme.colors.white};
    background: ${color};
    border-radius: 7px;
    padding: 10px 20px;
    overflow: hidden;
    animation: ${animate} 0.5s;

    > svg{
      position: absolute;
      opacity: 30%;
      height: 110%;
      top: -10px;
      right: -30px;
    }

    > span {
      font-size: 18px;
      font-weight: 500;
    }

    > small {
      font-size: 12px;
      position: absolute;
      bottom: 10px;
    }

    ${media.lessThan("medium")`
      > span{
        font-size: 14px;
      }

      > h1 {
        word-wrap: break-word;
        font-size: 22px;

        strong {
          display: inline-block;
          width: 100%;
          font-size: 16px;
        }
      }
    `}

    ${media.lessThan("small")`
      width: 100%;

      > h1 {
        display: flex;
      
        strong {
          position: initial;
          width: auto;
          font-size: 22px;

          &::after{
            display: inline-block;
            content: '';
            width: 1px;
          }
        }
      }
    `}
  `}
`;
