import styled, { css, keyframes } from 'styled-components';
import media from 'styled-media-query';

type LegendProps = {
  color: string
}

const animate = keyframes`
  0%{
    transform: translateX(-100px);
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

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 400px;
    background: ${theme.colors.tertiary};
    color: ${theme.colors.white};
    margin: 10px 0;
    padding: 30px 20px;
    border-radius: 7px;
    animation: ${animate} 0.5s;
  `}
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;

  > h2 {
    margin-bottom: 20px;
    padding-left: 20px;
  }

  ${media.lessThan("large")`
    flex-direction: column;
  `}
`;

export const LegendContainer = styled.ul`
  list-style: none;
  display: flex;
  padding-right: 20px;
`;

export const Legend = styled.li<LegendProps>`
  ${({ color }) => css`
    display: flex;
    align-items: center;
    margin-bottom: 7px;
    margin-left: 18px;
    
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
      > div {
        width: 30px;
        height: 30px;
      }
    `}
  `}
`;
