import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const Content = styled.main``;

export const Filters = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;

    .tag-filter{
      font-size: 18px;
      font-weight: 500;
      background: none;
      color: ${theme.colors.white};
      margin: 0 10px;
      transition: opacity 0.3s;
      opacity: 0.4;

      &:hover{
        opacity: 0.7;
      }
    }

    .tag-filter-recurrent::after{
      content: '';
      display: block;
      width: 55px;
      margin: 0 auto;
      border-bottom: 10px solid ${theme.colors.success};
    }

    .tag-filter-eventual::after{
      content: '';
      display: block;
      width: 55px;
      margin: 0 auto;
      border-bottom: 10px solid ${theme.colors.warning};
    }

    .tag-actived{
      opacity: 1;
    }
  `}
`;
