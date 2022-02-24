import styled, { css } from 'styled-components';

type LegendProps = {
  color: string
}

export const Container = styled.div`
  ${({ theme }) => css`
    width: 48%;
    min-height: 260px;
    margin: 10px 0;
    background: ${theme.colors.tertiary};
    border-radius: 7px;
    display: flex;
  `}
`;

export const SideLeft = styled.aside`
  flex: 1;
  padding: 30px 20px;

  > h2 {
    padding-left: 20px;
    margin-bottom: 10px;
  }
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
  `}
`;

export const Legend = styled.li<LegendProps>`
  ${({ color }) => css`
    display: flex;
    align-items: center;
    margin-bottom: 7px;
    padding-left: 20px;
    
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

export const SideRight = styled.main`
  flex: 1;
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 35px;
  min-height: 150px;
`;
