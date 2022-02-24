import styled, { css } from 'styled-components';

type LegendProps = {
  color: string
}

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 400px;
    background: ${theme.colors.tertiary};
    color: ${theme.colors.white};
    margin: 10px 0;
    padding: 30px 20px;
    border-radius: 7px;
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
    margin-left: 7px;
    
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
  `}
`;
