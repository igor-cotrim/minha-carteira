import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 48%;
    height: 260px;
    background: ${theme.colors.tertiary};
    color: ${theme.colors.white};
    border-radius: 7px;
    margin: 10px 0;
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > header svg {
      width: 35px;
      height: 35px;
      margin-left: 7px;
    }

    > header p {
      font-size: 18px;
    }
  `}
`;
