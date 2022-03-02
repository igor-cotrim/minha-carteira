import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.primary};
  `}
`;

export const Logo = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    > h2 {
      color: ${theme.colors.white};
      margin-left: 7px;
    }

    > svg {
      height: 40px;
      width: 40px;
    }
  `}
`;

export const Form = styled.form`
  ${({ theme }) => css`
    width: 300px;
    height: 300px;
    padding: 30px;
    border-radius: 10px;
    background: ${theme.colors.tertiary};
  `}
`;

export const FormTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    margin-bottom: 40px;
    
    &:after{
      content: '';
      display: block;
      width: 55px;
      border-bottom: 10px solid ${theme.colors.warning};
    }
  `}
`;
