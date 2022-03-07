import styled, { css, keyframes } from 'styled-components';
import media from 'styled-media-query';

type LegendProps = {
  color: string
}

const animate = keyframes`
  0% {
    transform: translateX(100px);
    opacity: 0;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
`

export const Container = styled.div`
  ${({ theme }) => css`
    width: 48%;
    height: 260px;
    margin: 10px 0;
    background: ${theme.colors.tertiary};
    color: ${theme.colors.white};
    border-radius: 7px;
    display: flex;
    animation: ${animate} 0.5s;

    ${media.lessThan("medium")`
      display: flex;
      width: 100%;
    `}
  `}
`;

export const SideLeft = styled.aside`
  padding: 30px 20px;

  > h2 {
    margin-bottom: 20px;
  }

  ${media.lessThan("large")`
    padding: 0 15px 15px;
    margin-bottom: 7px;

    > h2 {
      margin-top: 15px;
      margin-bottom: 7px;
    }
  `}

  ${media.lessThan("small")`
    padding: 15px;
  `}
`;

export const LegendContainer = styled.ul`
  ${({ theme }) => css`
    list-style: none;
    height: 175px;
    padding-right: 15px;
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

    ${media.lessThan("large")`
      display: flex;
      flex-direction: column;
    `}
  `}
`;

export const Legend = styled.li<LegendProps>`
  ${({ color }) => css`
    display: flex;
    align-items: center;
    margin-bottom: 7px;
    
    > div {
      background: ${color};
      width: 40px;
      height: 40px;
      border-radius: 5px;
      font-size: 14px;
      line-height: 40px;
      text-align: center;
    }

    > span {
      margin-left: 5px;
    }

    ${media.lessThan("large")`
      font-size: 14px;
      margin: 3px 0;

      > div {
        width: 35px;
        height: 35px;
        line-height: 35px;
      }

      > span {
        margin-left: 7px;
      }
    `}
  `}
`;

export const SideRight = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;

  ${media.lessThan("large")`
    height: 100%;
  `}
`;
